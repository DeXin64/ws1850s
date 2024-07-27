/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */
/*
WS1850S模块已经设置为iic模式
Pin1		A1：	3V3
Pin32		A0/EA: 	3V3
Pin31		D7:	SCL
Pin24		ALE:	SDA
Pin25-30	D1-D6:	GND

***********************即设备地址位为：***************************
    MSB														LSB
    Bit6	Bit5	Bit4	Bit3	Bit2	Bit1	Bit0	R/W
    0		0		0		0		0		0		0
******************************************************************
* * 功能描述：Mifare1 寻卡→防冲突→选卡→读写 接口

*/

/**
 * Custom blocks
 */
//% weight=100 color=#00CCFF icon="\uf136" block="WS1850S_RFID"
//% groups='["公共", "读取卡数据", "写入卡数据"]'
namespace WS1850S_RFID {
  
    /********************************************* 变量 ***********************************************/
    //MF522命令字
    let PCD_IDLE = 0x00               //NO action;取消当前命令
    let PCD_AUTHENT = 0x0E               //验证密钥
    let PCD_RECEIVE = 0x08               //接收数据
    let PCD_TRANSMIT = 0x04               //发送数据
    let PCD_TRANSCEIVE = 0x0C               //发送并接收数据
    let PCD_RESETPHASE = 0x0F               //复位
    let PCD_CALCCRC = 0x03               //CRC计算

    //Mifare_One卡片命令字
    let PICC_REQIDL = 0x26               //寻天线区内未进入休眠状态
    let PICC_REQALL = 0x52               //寻天线区内全部卡
    let PICC_ANTICOLL = 0x93               //防冲撞
    let PICC_SElECTTAG = 0x95              //选卡93
    let PICC_AUTHENT1A = 0x60               //验证A密钥
    let PICC_AUTHENT1B = 0x61               //验证B密钥
    let PICC_READ = 0x30               //读块
    let PICC_WRITE = 0xA0               //写块
    let PICC_DECREMENT = 0xC0               //扣款
    let PICC_INCREMENT = 0xC1               //充值
    let PICC_RESTORE = 0xC2               //调块数据到缓冲区
    let PICC_TRANSFER = 0xB0               //保存缓冲区中数据
    let PICC_HALT = 0x50               //休眠


    //和MF522通讯时返回的错误代码
    let MI_OK = 0
    let MI_NOTAGERR = (-1)  //1
    let MI_ERR = (-2)  //2

    //MF522 FIFO长度定义
    /////////////////////////////////////////////////////////////////////
    let DEF_FIFO_LENGTH = 64                 //FIFO size=64byte

    //------------------MFRC522寄存器---------------
    //Page 0:Command and Status
    let Reserved00 = 0x00
    let CommandReg = 0x01
    let CommIEnReg = 0x02
    let DivlEnReg = 0x03
    let CommIrqReg = 0x04
    let DivIrqReg = 0x05
    let ErrorReg = 0x06
    let Status1Reg = 0x07
    let Status2Reg = 0x08
    let FIFODataReg = 0x09
    let FIFOLevelReg = 0x0A
    let WaterLevelReg = 0x0B
    let ControlReg = 0x0C
    let BitFramingReg = 0x0D
    let CollReg = 0x0E
    let Reserved01 = 0x0F
    //Page 1:Command     
    let Reserved10 = 0x10
    let ModeReg = 0x11
    let TxModeReg = 0x12
    let RxModeReg = 0x13
    let TxControlReg = 0x14
    let TxAutoReg = 0x15
    let TxSelReg = 0x16
    let RxSelReg = 0x17
    let RxThresholdReg = 0x18
    let DemodReg = 0x19
    let Reserved11 = 0x1A
    let Reserved12 = 0x1B
    let MifareReg = 0x1C
    let Reserved13 = 0x1D
    let Reserved14 = 0x1E
    let SerialSpeedReg = 0x1F
    //Page 2:CFG    
    let Reserved20 = 0x20
    let CRCResultRegM = 0x21
    let CRCResultRegL = 0x22
    let Reserved21 = 0x23
    let ModWidthReg = 0x24
    let Reserved22 = 0x25
    let RFCfgReg = 0x26
    let GsNReg = 0x27
    let CWGsPReg = 0x28
    let ModGsPReg = 0x29
    let TModeReg = 0x2A
    let TPrescalerReg = 0x2B
    let TReloadRegH = 0x2C
    let TReloadRegL = 0x2D
    let TCounterValueRegH = 0x2E
    let TCounterValueRegL = 0x2F
    //Page 3:TestRegister     
    let Reserved30 = 0x30
    let TestSel1Reg = 0x31
    let TestSel2Reg = 0x32
    let TestPinEnReg = 0x33
    let TestPinValueReg = 0x34
    let TestBusReg = 0x35
    let AutoTestReg = 0x36
    let VersionReg = 0x37
    let AnalogTestReg = 0x38
    let TestDAC1Reg = 0x39
    let TestDAC2Reg = 0x3A
    let TestADCReg = 0x3B
    let Reserved31 = 0x3C
    let Reserved32 = 0x3D
    let Reserved33 = 0x3E
    let Reserved34 = 0x3F
    //-----------------------------------------------
    //变量
    let Type2 = 0
    const BlockAdr: number[] = [8, 9, 10]
    let temp = 0
    let val = 0
    let uid: number[] = []
    let returnLen = 0
    let returnData: number[] = []
    let status = 0
    let u = 0
    let ChkSerNum = 0
    let returnBits: any = null
    let recvData: number[] = []
    let d = 0
    let MAX_LEN = 16
    let Key = [255, 255, 255, 255, 255, 255]
    let version = ''

    /*********************************** 模块 ****************************************/
    //% weight=90 block="初始化RFID"
    //% group="公共"
    //% color=#4B974A
    export function init() {
        IIC_Write(CommandReg, PCD_RESETPHASE)//掉电和命令寄存器，0x0F软复位
        IIC_Write(TModeReg, 0x8D)//0x2A内部定时器的设置寄存器，0x8D*****
        IIC_Write(TPrescalerReg, 0x3E)//0x2B内部定时器的设置寄存器，0x3E***
        IIC_Write(TReloadRegL, 0x1E)//0x2D定义16位定时器的重载值寄存器，30***
        IIC_Write(TCounterValueRegH, 0x00)//0x2E 16位定时器的计数值寄存器，0
        IIC_Write(TxAutoReg, 0x40)//0x15控制天线驱动器设置的寄存器，0x40
        IIC_Write(ModeReg, 0x3D)//0x11当以发送和接收通用模式的寄存器，0x3D
        AntennaON()
    }

    //% weight=90 block="关闭RFID"
    //% group="公共"
    //% color=#4B974A
    export function antennaOFF() {
        ClearBits(TxControlReg, 0x03) // 0x14控制天线驱动器管脚TX1和TX2的寄存器
    }

    //% weight=90 block="读取卡ID"
    //% group="读取卡数据"
    //% color=#4B974A
    export function readID(): number {
        [status, Type2] = Request(PICC_REQIDL)  //寻卡+复位应答

        if (status != 0) {
            return null
        }
        [status, uid] = AvoidColl()

        if (status != 0) {
            return null
        }

        return getIDNum(uid)
    }
    //% weight=90 block="读取卡内部数据"
    //% group="读取卡数据"
    //% color=#4B974A
    export function readData(): string {
        return ReadData_manage()
    }

    //% weight=90 block="写入数据到卡内部|数据内容%data"
    //% group="写入卡数据"
    //% color=#4B974A
    export function writeData(data: string) {
        let id = writeToCard(data)

        while (!id) {
            if (!checkRFIDStatus()) {
                // 卡状态异常
                break
            }

            let id = writeToCard(data)

            if (id != undefined) {
                break
            }
        }
    }

    //% weight=90 block="版本 20240727 11:16"
    //% group="公共"
    //% color=#4B974A
    export function getVersion(): string {
        let text = readFromCard()
        return text
    }

    /*********************************** 共用方法 ****************************************/
    // iic写函数，设备地址00，adr为寄存器地址，val为写数据
    function IIC_Write(adr: number, val: number) {
        let val_1 = ((adr << 8) | val)
        pins.i2cWriteNumber(
            0,
            val_1,
            NumberFormat.UInt16BE,
            false
        )
    }
    // 天线开启函数
    function AntennaON() {
        //0x14控制天线驱动器管脚TX1和TX2的寄存器
        temp = IIC_Read(TxControlReg)
        if (~(temp & 0x03)) {
            SetBits(TxControlReg, 0x03)
        }
    }
    // iic读函数，设备地址00，adr为寄存器地址，返回DATA为数据
    function IIC_Read(adr: number): number {
        pins.i2cWriteNumber(
            0,
            adr,
            NumberFormat.Int8BE,
            true
        )
        let DATA = pins.i2cReadNumber(0, NumberFormat.UInt8BE, false)
        return DATA
    }
    // 设置使能天线发射载波13.56Mhz寄存器函数
    function SetBits(reg: number, mask: number) {
        let tmp = IIC_Read(reg)
        IIC_Write(reg, (tmp | mask))
    }

    // 设置禁止天线发射载波13.56Mhz寄存器函数
    function ClearBits(reg: number, mask: number) {
        let tmp = IIC_Read(reg)
        IIC_Write(reg, tmp & (~mask))
    }

    // readID的第一个函数----寻卡函数
    function Request(reqMode: number): [number, number] {
        let Type: number[] = []
        IIC_Write(BitFramingReg, 0x07)  //0x0d面向位的帧的调节寄存器，0x07
        Type.push(reqMode)
        let [status, returnData, returnBits] = MFRC522_ToCard(PCD_TRANSCEIVE, Type)

        if ((status != 0) || (returnBits != 16)) {
            status = 2
        }

        return [status, returnBits]
    }
    function MFRC522_ToCard(command: number, sendData: number[]): [number, number[], number] {
        returnData = []
        returnLen = 0
        status = 2
        let irqEN = 0x00
        let waitIRQ = 0x00
        let lastBits = null
        let n = 0
    
        if (command == PCD_AUTHENT) {
            irqEN = 0x12
            waitIRQ = 0x10
        }
    
        if (command == PCD_TRANSCEIVE) {
            irqEN = 0x77
            waitIRQ = 0x30
        }
    
        IIC_Write(0x02, irqEN | 0x80)
        ClearBits(CommIrqReg, 0x80)
        SetBits(FIFOLevelReg, 0x80)
        IIC_Write(CommandReg, PCD_IDLE)
    
        for (let o = 0; o < (sendData.length); o++) {
            IIC_Write(FIFODataReg, sendData[o])
        }
        IIC_Write(CommandReg, command)
    
        if (command == PCD_TRANSCEIVE) {
            SetBits(BitFramingReg, 0x80)
        }
    
        let p = 2000
        while (true) {
            n = IIC_Read(CommIrqReg)
            p--
            if (~(p != 0 && ~(n & 0x01) && ~(n & waitIRQ))) {
                break
            }
        }
        ClearBits(BitFramingReg, 0x80)
    
        if (p != 0) {
            if ((IIC_Read(0x06) & 0x1B) == 0x00) {
                status = 0
                if (n & irqEN & 0x01) {
                    status = 1
                }
                if (command == PCD_TRANSCEIVE) {
                    n = IIC_Read(FIFOLevelReg)
                    lastBits = IIC_Read(ControlReg) & 0x07
                    if (lastBits != 0) {
                        returnLen = (n - 1) * 8 + lastBits
                    }
                    else {
                        returnLen = n * 8
                    }
                    if (n == 0) {
                        n = 1
                    }
                    if (n > MAX_LEN) {
                        n = MAX_LEN
                    }
                    for (let q = 0; q < n; q++) {
                        returnData.push(IIC_Read(FIFODataReg))
                    }
                }
            }
            else {
                status = 2
            }
        }
    
        return [status, returnData, returnLen]
    }
    // readID的第二个函数
    function AvoidColl(): [number, number[]] {
        let SerNum = []
        ChkSerNum = 0
        IIC_Write(BitFramingReg, 0)
        SerNum.push(PICC_ANTICOLL)
        SerNum.push(0x20)
        let [status, returnData, returnBits] = MFRC522_ToCard(PCD_TRANSCEIVE, SerNum)

        if (status == 0) {
            if (returnData.length == 5) {
                for (let k = 0; k <= 3; k++) {
                    ChkSerNum = ChkSerNum ^ returnData[k]
                }
                if (ChkSerNum != returnData[4]) {
                    status = 2
                }
            }
            else {
                status = 2
            }
        }
        return [status, returnData]
    }
    // readID的第三个函数
    function getIDNum(uid: number[]) {
        let a = 0

        for (let e = 0; e < 5; e++) {
            a = a * 256 + uid[e]
        }
        return a
    }

    // 读取的卡数据read()处理函数
    // 由于卡2扇区数据共48个字节（即48个字符），填入数据后，未填写的数据会自动补字符0（即16进制的0X20）
    // 这将导致海客LCD显示屏，显示的字符重叠，导致显示故障 
    // 所以需要编写一个仅显示有效字符串，去除补位字符0
    function ReadData_manage(): string {
        let manage_DATA: string
        let m_DATA_1: string = read()
        manage_DATA = m_DATA_1.trim()   //.trim()为js语言去除两端空格的函数
        return manage_DATA
    }
    // Read读取卡M1卡数据主函数
    function read(): string {               //数据长度48个字节
        let text = readFromCard()
        while (!text) {

            if (!checkRFIDStatus()) {
                // 卡状态异常
                break
            }

            let text = readFromCard()

            if (text != '') {
                return text
            }
        }
        return text
    }
    // Read读取卡M1卡数据第一个函数
    function readFromCard(): string {
        let [status, Type2] = Request(PICC_REQIDL)     //寻卡+复位应答
        if (status != 0) {
            return 'Request status is ' + status
        }

        [status, uid] = AvoidColl()     //防多卡冲突机制

        if (status != 0) {
            return 'AvoidColl status is ' + status
        }

        let id = getIDNum(uid)
        TagSelect(uid)                  //选择卡片
        status = Authent(PICC_AUTHENT1A, 11, Key, uid)  //三次相互验证
        let data: NumberFormat.UInt8LE[] = []
        let text_read = ''
        let block: number[] = []
        if (status == 0) {
            for (let BlockNum of BlockAdr) {
                block = ReadRFID(BlockNum)
                if (block) {
                    data = data.concat(block)
                }
            }
            if (data) {
                for (let c of data) {
                    text_read = text_read.concat(String.fromCharCode(c))
                }
            }
        } else {
            return 'Authent status is ' + status
        }
        Crypto1Stop()
        return text_read
    }
    // Read读取卡M1卡数据第二个函数
    function TagSelect(SerNum: number[]) {
        let buff: number[] = []
        buff.push(0x93)
        buff.push(0x70)
        for (let r = 0; r < 5; r++) {
            buff.push(SerNum[r])
        }

        let pOut = CRC_Calculation(buff)
        buff.push(pOut[0])
        buff.push(pOut[1])
        let [status, returnData, returnLen] = MFRC522_ToCard(PCD_TRANSCEIVE, buff)
        if ((status == 0) && (returnLen == 0x18)) {
            return returnData[0]
        }
        else {
            return 0
        }
    }
    // Read读取卡M1卡数据第三个函数
    function Authent(authMode: number, BlockAdr: number, Sectorkey: number[], SerNum: number[]): number {
        let buff: number[] = []
        buff.push(authMode)
        buff.push(BlockAdr)
        for (let l = 0; l < (Sectorkey.length); l++) {
            buff.push(Sectorkey[l])
        }
        for (let m = 0; m < 4; m++) {
            buff.push(SerNum[m])
        }
        [status, returnData, returnLen] = MFRC522_ToCard(PCD_AUTHENT, buff)
        if (status != 0) {
            serial.writeLine("AUTH ERROR!")
        }
        if ((IIC_Read(Status2Reg) & 0x08) == 0) {
            serial.writeLine("AUTH ERROR2!")
        }
        return status
    }
    // Read读取卡M1卡数据第四个函数
    function ReadRFID(blockAdr: number): number[] {
        recvData = []
        recvData.push(PICC_READ)
        recvData.push(blockAdr)
        let pOut2 = []
        pOut2 = CRC_Calculation(recvData)
        recvData.push(pOut2[0])
        recvData.push(pOut2[1])
        let [status, returnData, returnLen] = MFRC522_ToCard(PCD_TRANSCEIVE, recvData)

        if (status != 0) {
            serial.writeLine("Error while reading!")
        }

        if (returnData.length != 16) {
            return null
        }
        else {
            return returnData
        }
    }
    //---------Read读取卡M1卡数据第五个函数------------------------//
    function Crypto1Stop() {
        ClearBits(Status2Reg, 0x08)
    }
    // Read读取卡M1卡数据第六个函数
    function CRC_Calculation(DataIn: number[]) {
        ClearBits(DivIrqReg, 0x04)
        SetBits(FIFOLevelReg, 0x80)
        for (let s = 0; s < (DataIn.length); s++) {
            IIC_Write(FIFODataReg, DataIn[s])
        }
        IIC_Write(CommandReg, 0x03)
        let t = 0xFF

        while (true) {
            if (!checkRFIDStatus()) {
                // 卡状态异常
                break
            }

            let v = IIC_Read(DivIrqReg)
            t--
            if (!(t != 0 && !(v & 0x04))) {
                break
            }
        }

        let DataOut: number[] = []
        DataOut.push(IIC_Read(0x22))
        DataOut.push(IIC_Read(0x21))
        return DataOut
    }

    // write卡数据的第一个函数
    function writeToCard(txt: string): number {
        [status, Type2] = Request(PICC_REQIDL)

        if (status != 0) {
            return null
        }
        [status, uid] = AvoidColl()

        if (status != 0) {
            return null
        }

        let id = getIDNum(uid)
        TagSelect(uid)
        status = Authent(PICC_AUTHENT1A, 11, Key, uid)
        ReadRFID(11)

        if (status == 0) {
            let data: NumberFormat.UInt8LE[] = []
            for (let i = 0; i < txt.length; i++) {
                data.push(txt.charCodeAt(i))
            }

            for (let j = txt.length; j < 48; j++) {
                data.push(32)
            }

            let b = 0
            for (let BlockNum2 of BlockAdr) {
                WriteRFID(BlockNum2, data.slice((b * 16), ((b + 1) * 16)))
                b++
            }
        }

        Crypto1Stop()
        serial.writeLine("Written to Card")
        return id
    }
    // write卡数据的第二个函数
    function WriteRFID(blockAdr: number, writeData: number[]) {
        let buff: number[] = []
        let crc: number[] = []

        buff.push(0xA0)
        buff.push(blockAdr)
        crc = CRC_Calculation(buff)
        buff.push(crc[0])
        buff.push(crc[1])
        let [status, returnData, returnLen] = MFRC522_ToCard(PCD_TRANSCEIVE, buff)
        if ((status != 0) || (returnLen != 4) || ((returnData[0] & 0x0F) != 0x0A)) {
            status = 2
            serial.writeLine("ERROR")
        }

        if (status == 0) {
            let buff2: number[] = []
            for (let w = 0; w < 16; w++) {
                buff2.push(writeData[w])
            }
            crc = CRC_Calculation(buff2)
            buff2.push(crc[0])
            buff2.push(crc[1])
            let [status, returnData, returnLen] = MFRC522_ToCard(PCD_TRANSCEIVE, buff2)
            if ((status != 0) || (returnLen != 4) || ((returnData[0] & 0x0F) != 0x0A)) {
                serial.writeLine("Error while writing")
            }
            else {
                serial.writeLine("Data written")
            }
        }
    }

    // 判断卡状态是否正常
    function checkRFIDStatus(): boolean {
        [status, Type2] = Request(PICC_REQIDL)  //寻卡+复位应答
        if (status != 0) {
            return false
        }

        // [status, uid] = AvoidColl()
        // if (status != 0) {
        //     return false
        // }

        return true
    }

    function readId2(): [number, string] {
        return [1, 'V1.0']
    }

}