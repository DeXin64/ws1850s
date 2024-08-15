/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */
enum MotorEnum {
    //% block="1"
    portA = 3,
    //% block="2"
    portB = 4,
    //% block="3"
    portC = 1,
    //% block="4"
    portD = 2,
}

enum DirectEnum {
    //% block="停止"
    direct0 = 0,
    //% block="正转"
    direct1 = 1,
    //% block="反转"
    direct2 = 2,
}

enum AngleEnum {
    //% block="15"
    angle15 = 15,
    //% block="30"
    angle30 = 30,
    //% block="45"
    angle45 = 45,
    //% block="60"
    angle60 = 60,
    //% block="90"
    angle90 = 90,
    //% block="120"
    angle120 = 120,
    //% block="150"
    angle150 = 150,
    //% block="180"
    angle180 = 180,
}

enum SensorEnum {
    //% block="5"
    portA = 1,
    //% block="6"
    portB = 2,
    //% block="7"
    portC = 3,
    //% block="8"
    portD = 4,
}

enum OnOffEnum {
    //% block="停止"
    off = 0,
    //% block="启动"
    on = 1,
}

enum DirectKeyEnum {
    //% block="上"
    up = 0,
    //% block="下"
    down = 1,
    //% block="左"
    left = 2,
    //% block="右"
    right = 3,
}

enum KeyEnum {
    //% block="A"
    keya = 0,
    //% block="B"
    keyb = 1,
}

enum LEDEnum {
    //% block="1"
    led1 = 0,
    //% block="2"
    led2 = 1,
    //% block="3"
    led3 = 2,
}

enum Dht11Result {
    //% block="摄氏度"
    Celsius,
    //% block="华氏度"
    Fahrenheit,
    //% block="湿度"
    humidity
}

enum RockerEnum {
    //% block="5"
    portA = 1,
}

enum RockerdirectEnum {
    //% blockId="Nostate" block="无"
    nostate = 0,
    //% blockId="Up" block="上"
    Up = 1,
    //% blockId="Down" block="下"
    Down = 2,
    //% blockId="Left" block="左"
    Left = 3,
    //% blockId="Right" block="右"
    Right = 4,
}

enum RockerXYEnum {
    //% block="X轴"
    x = 1,
    //% block="Y轴"
    y = 2,
}

enum IrButton {
    //% block="any"
    Any = -1,
    //% block="▲"
    Up = 24,
    //% block=" "
    Unused_2 = -2,
    //% block="◀"
    Left = 16,
    //% block="OK"
    Ok = 56,
    //% block="▶"
    Right = 90,
    //% block=" "
    Unused_3 = -3,
    //% block="▼"
    Down = 74,
    //% block=" "
    Unused_4 = -4,
    //% block="1"
    Number_1 = 162,
    //% block="2"
    Number_2 = 98,
    //% block="3"
    Number_3 = 226,
    //% block="4"
    Number_4 = 34,
    //% block="5"
    Number_5 = 2,
    //% block="6"
    Number_6 = 194,
    //% block="7"
    Number_7 = 224,
    //% block="8"
    Number_8 = 168,
    //% block="9"
    Number_9 = 144,
    //% block="*"
    Star = 104,
    //% block="0"
    Number_0 = 152,
    //% block="#"
    Hash = 176,
}

enum IrButtonAction {
    //% block="按下"
    Pressed = 0,
    //% block="松开"
    Released = 1,
}

enum IrProtocol {
    //% block="Keyestudio"
    Keyestudio = 0,
    //% block="NEC"
    NEC = 1,
}

// 压力传感器pin口枚举
enum PressureSensorEnum {
    //% block="P5口"
    PIN_5 = 5,
    //% block="P6口"
    PIN_6 = 6,
    //% block="P7口"
    PIN_7 = 7,
    //% block="P8口"
    PIN_8 = 8,
}
// 颜色传感器RGBW枚举
enum ColorSensorEnum {
    //% block="红色"
    R = 0x08,
    //% block="绿色"
    G = 0x09,
    //% block="蓝色"
    B = 0x0A,
    //% block="白色"
    W = 0x0b,
}

enum EntryEnum {
    //% block="打开灯"
    entry_1 = 0x01,
    //% block="关闭灯"
    entry_2 = 0x02,
    //% block="打开风扇"
    entry_3 = 0x03,
    //% block="关闭风扇"
    entry_4 = 0x04,
    //% block="小车前进"
    entry_5 = 0x05,
    //% block="小车后退"
    entry_6 = 0x06,
    //% block="小车停止"
    entry_7 = 0x07,
    //% block="播放音乐"
    entry_8 = 0x08,
    //% block="关闭音乐"
    entry_9 = 0x09,
}

/*********************************RFID 专用参数 开始 **********************************/
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
let returnBits: number = null
let recvData: number[] = []
let d = 0
let MAX_LEN = 16
let Key = [255, 255, 255, 255, 255, 255]
let Version
/*********************************RFID 专用参数 结束 **********************************/

/**
 * Custom blocks
 */
//% weight=100 color=#00CCFF icon="\uf136" block="海客智能套件V2"
//% groups='["主机", "电机", "蜂鸣器", "RGB彩灯", "超声波", "红外避障", "光敏", "温湿度", "旋钮", "声音", "碰撞", "循迹", "按键", "摇杆", "红外接收", "压力传感器", "颜色传感器", "语音识别", "RFID"]'
namespace hicbit {
    /*
    * hicbit initialization, please execute at boot time
    */
    //% weight=90 block="初始化Hicbit设备"
    //% group="主机"
    //% color=#7CCD7C
    export function HicbitInit() {
        led.enable(false);
        serial.redirect(
            SerialPin.P8,
            SerialPin.P12,
            BaudRate.BaudRate115200);
        basic.pause(2000);
        let i: number;
        for (i = 1; i <= 4; i++) {
            SetMotorSpeed(i, 0);
        }
        ClearLCD(1, 7);
        SetLCDString(7, 1, "Loading Success!");
        basic.pause(1000);
        ClearLCD(7, 7);
    }

    //% row.min=1 row.max=7
    //% row.defl=1
    //% col.min=1 col.max=21
    //% col.defl=1
    //% weight=80 block="LCD|第%row行|第%col列|内容%dat"
    //% group="主机"
    //% color=#7CCD7C
    export function SetLCDString(row: number, col: number, str: string): void {
        let len = str.length;
        let buf = pins.createBuffer(len + 5);
        buf[0] = 0xfe;
        buf[1] = 0xc0;
        buf[2] = row + 1;
        buf[3] = (col - 1) * 6 + 1;
        for (let i = 0; i < len; i++)
            buf[i + 4] = str.charCodeAt(i);
        buf[len + 4] = 0xef;
        serial.writeBuffer(buf);
        basic.pause(20);
    }

    //% row.min=1 row.max=7
    //% row.defl=1
    //% col.min=1 col.max=21
    //% col.defl=1
    //% weight=70 block="LCD|第%row行|第%col列|数值%dat"
    //% group="主机"
    //% color=#7CCD7C
    export function SetLCDData(row: number, col: number, dat: number): void {
        let str = dat.toString();
        let len = str.length;
        let buf = pins.createBuffer(len + 7);
        buf[0] = 0xfe;
        buf[1] = 0xc0;
        buf[2] = row + 1;
        buf[3] = (col - 1) * 6 + 1;
        for (let i = 0; i < len; i++)
            buf[i + 4] = str.charCodeAt(i);
        buf[len + 4] = 0x20;
        buf[len + 5] = 0x20;
        buf[len + 6] = 0xef;
        serial.writeBuffer(buf);
        basic.pause(20);
    }

    //% row.min=1 row.max=7
    //% row.defl=1
    //% col.min=1 col.max=21
    //% col.defl=1
    //% weight=60 block="LCD|第%row行|第%col列|内容%str|数值%dat"
    //% inlineInputMode=inline
    //% group="主机"
    //% color=#7CCD7C
    export function SetLCD(row: number, col: number, str: string, dat: number): void {
        let s = dat.toString();
        str = str.concat(s);
        let len = str.length;
        let buf = pins.createBuffer(len + 7);
        buf[0] = 0xfe;
        buf[1] = 0xc0;
        buf[2] = row + 1;
        buf[3] = (col - 1) * 6 + 1;
        for (let i = 0; i < len; i++)
            buf[i + 4] = str.charCodeAt(i);
        buf[len + 4] = 0x20;
        buf[len + 5] = 0x20;
        buf[len + 6] = 0xef;
        serial.writeBuffer(buf);
        basic.pause(20);
    }

    //% row1.min=1 row1.max=7
    //% row1.defl=1
    //% row2.min=1 row2.max=7
    //% row2.defl=7
    //% weight=50 block="清屏|第%row1行至第%row2行"
    //% group="主机"
    //% color=#7CCD7C
    export function ClearLCD(row1: number, row2: number): void {
        let buf = pins.createBuffer(5);
        row1 = row1 + 1;
        row2 = row2 + 1;
        buf[0] = 0xfe;
        buf[1] = 0xd0;
        buf[2] = row1;
        buf[3] = row2;
        if (row1 > row2) {
            buf[2] = row2;
            buf[3] = row1;
        }
        buf[4] = 0xef;
        serial.writeBuffer(buf);
        basic.pause(20);
    }

    //% weight=40 block="方向键|%directkey按下"
    //% group="主机"
    //% color=#7CCD7C
    export function IsDirectKeyPress(directkey: DirectKeyEnum): boolean {
        let IsDirectKey: boolean = false;
        switch (directkey) {
            case DirectKeyEnum.up:
                pins.setPull(DigitalPin.P5, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P5) == 0) {
                    basic.pause(10);
                    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
                        IsDirectKey = true;
                        while (pins.digitalReadPin(DigitalPin.P5) == 0);
                    }
                }
                break;
            case DirectKeyEnum.down:
                pins.setPull(DigitalPin.P9, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P9) == 0) {
                    basic.pause(10);
                    if (pins.digitalReadPin(DigitalPin.P9) == 0) {
                        IsDirectKey = true;
                        while (pins.digitalReadPin(DigitalPin.P9) == 0);
                    }
                }
                break;
            case DirectKeyEnum.left:
                pins.setPull(DigitalPin.P11, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P11) == 0) {
                    basic.pause(10);
                    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
                        IsDirectKey = true;
                        while (pins.digitalReadPin(DigitalPin.P11) == 0);
                    }
                }
                break;
            case DirectKeyEnum.right:
                pins.setPull(DigitalPin.P7, PinPullMode.PullUp);
                if (pins.digitalReadPin(DigitalPin.P7) == 0) {
                    basic.pause(10);
                    if (pins.digitalReadPin(DigitalPin.P7) == 0) {
                        IsDirectKey = true;
                        while (pins.digitalReadPin(DigitalPin.P7) == 0);
                    }
                }
                break;
        }
        return IsDirectKey;
    }

    //% weight=30 block="当方向键|%directkey按下时"
    //% group="主机"
    //% color=#7CCD7C
    export function OnDirectKeyPress(directkey: DirectKeyEnum, body: () => void) {
        control.inBackground(function () {
            while (true) {
                if (IsDirectKeyPress(directkey)) {
                    body();
                }
                basic.pause(10);
            }
            
        })
    }

    //% weight=90 block="按键|接口%pin|%keypress按下"
    //% group="按键"
    //% color=#C4281B     
    export function IsKeyPress(pin: SensorEnum, presskey: KeyEnum): boolean {
        let IsKeyPress: boolean = false;
        switch (pin) {
            case SensorEnum.portA:
                if (presskey == KeyEnum.keya) {
                    pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
                    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
                        basic.pause(10);
                        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
                            IsKeyPress = true;
                            while (pins.digitalReadPin(DigitalPin.P0) == 0);
                        }
                    }
                }
                else if (presskey == KeyEnum.keyb) {
                    pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
                    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
                        basic.pause(10);
                        if (pins.digitalReadPin(DigitalPin.P1) == 0) {
                            IsKeyPress = true;
                            while (pins.digitalReadPin(DigitalPin.P1) == 0);
                        }
                    }
                }
                break;
            case SensorEnum.portB:
                if (presskey == KeyEnum.keya) {
                    pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
                    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
                        basic.pause(10);
                        if (pins.digitalReadPin(DigitalPin.P13) == 0) {
                            IsKeyPress = true;
                            while (pins.digitalReadPin(DigitalPin.P13) == 0);
                        }
                    }
                }
                else if (presskey == KeyEnum.keyb) {
                    pins.setPull(DigitalPin.P2, PinPullMode.PullUp);
                    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
                        basic.pause(10);
                        if (pins.digitalReadPin(DigitalPin.P2) == 0) {
                            IsKeyPress = true;
                            while (pins.digitalReadPin(DigitalPin.P2) == 0);
                        }
                    }
                }
                break;
            case SensorEnum.portC:
                if (presskey == KeyEnum.keya) {
                    pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
                    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
                        basic.pause(10);
                        if (pins.digitalReadPin(DigitalPin.P14) == 0) {
                            IsKeyPress = true;
                            while (pins.digitalReadPin(DigitalPin.P14) == 0);
                        }
                    }
                }
                else if (presskey == KeyEnum.keyb) {
                    pins.setPull(DigitalPin.P3, PinPullMode.PullUp);
                    if (pins.digitalReadPin(DigitalPin.P3) == 0) {
                        basic.pause(10);
                        if (pins.digitalReadPin(DigitalPin.P3) == 0) {
                            IsKeyPress = true;
                            while (pins.digitalReadPin(DigitalPin.P3) == 0);
                        }
                    }
                }
                break;
            case SensorEnum.portD:
                if (presskey == KeyEnum.keya) {
                    pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
                    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
                        basic.pause(10);
                        if (pins.digitalReadPin(DigitalPin.P15) == 0) {
                            IsKeyPress = true;
                            while (pins.digitalReadPin(DigitalPin.P15) == 0);
                        }
                    }
                }
                else if (presskey == KeyEnum.keyb) {
                    pins.setPull(DigitalPin.P4, PinPullMode.PullUp);
                    if (pins.digitalReadPin(DigitalPin.P4) == 0) {
                        basic.pause(10);
                        if (pins.digitalReadPin(DigitalPin.P4) == 0) {
                            IsKeyPress = true;
                            while (pins.digitalReadPin(DigitalPin.P4) == 0);
                        }
                    }
                }
                break;
        }
        return IsKeyPress;
    }

    //% weight=90 block="按键|当接口%pin|%keypress按下时"
    //% group="按键"
    //% color=#C4281B  
    export function OnKeyPress(pin: SensorEnum, presskey: KeyEnum, body: () => void) {
        control.inBackground(function () {
            while (true) {
                if (IsKeyPress(pin, presskey)) {
                    body();
                }
                basic.pause(10);
            }
        })
    }

    //% direct.defl=DirectEnum.direct1
    //% speed.min=-100 speed.max=100
    //% weight=90 block="电机|接口%sn|速度%speed"
    //% group="电机"
    //% color=#5E9B9D
    export function SetMotorSpeed(sn: MotorEnum, speed: number): void {
        let direct: number = 0;
        let buf = pins.createBuffer(6);
        if (speed > 0) direct = 1;
        else if (speed < 0) {
            direct = 2;
            speed = Math.abs(speed);
        }
        buf[0] = 0xfe;
        buf[1] = 0xa0;
        buf[2] = sn;
        buf[3] = direct;
        if (speed == 0) buf[4] = 0;
        else buf[4] = 20 + Math.floor(speed * 0.65);
        buf[5] = 0xef;
        serial.writeBuffer(buf);
        basic.pause(20);
    }

    //% direct.defl=DirectEnum.direct1
    //% angle.min=-360 angle.max=360
    //% weight=80 block="电机|接口%sn|角度%anelg"
    //% group="电机"
    //% color=#5E9B9D
    export function SetMotorAngle(sn: MotorEnum, angle: number): void {
        let direct: number = 0;
        let buf = pins.createBuffer(8);
        if (angle > 0) direct = 1;
        else if (angle < 0) {
            direct = 2;
            angle = Math.abs(angle);
        }
        else direct = 0;
        angle = angle * 5.2 - 12;
        buf[0] = 0xfe;
        buf[1] = 0xb0;
        buf[2] = sn;
        buf[3] = direct;
        buf[4] = 35;
        buf[5] = ((angle >> 8) & 0xff);
        buf[6] = (angle & 0xff);
        if (buf[6] == 0xef) buf[6] = 0xee;
        if (buf[6] == 0xfe) buf[6] = 0xff;
        buf[7] = 0xef;
        serial.writeBuffer(buf);
        basic.pause(20);
    }

    //% weight=70 block="电机|接口%sn|停止"
    //% group="电机"
    //% color=#5E9B9D
    export function StopMotor(sn: MotorEnum): void {
        SetMotorSpeed(sn, 0);
    }

    //% weight=90 block="光敏|接口%pin|值(0~255)"
    //% group="光敏"
    //% color=#4B974A
    export function GetPhotoSensitiveValue(pin: SensorEnum): number {
        let ADCPin: AnalogPin;
        switch (pin) {
            case SensorEnum.portA:
                ADCPin = AnalogPin.P1;
                break;
            case SensorEnum.portB:
                ADCPin = AnalogPin.P2;
                break;
            case SensorEnum.portC:
                ADCPin = AnalogPin.P3;
                break;
            case SensorEnum.portD:
                ADCPin = AnalogPin.P4;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return 255 - Math.round(adValue);
    }

    //% weight=90 block="循迹|接口%pin|值(0~255)"
    //% group="循迹"
    //% color=#D7C599
    export function GetLineSensorValue(pin: SensorEnum): number {
        let ADCPin: AnalogPin;
        switch (pin) {
            case SensorEnum.portA:
                ADCPin = AnalogPin.P1;
                break;
            case SensorEnum.portB:
                ADCPin = AnalogPin.P2;
                break;
            case SensorEnum.portC:
                ADCPin = AnalogPin.P3;
                break;
            case SensorEnum.portD:
                ADCPin = AnalogPin.P4;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return Math.round(adValue);
    }

    //% weight=90  block="旋钮|接口%pin|值(0~255)"
    //% group="旋钮"
    //% color=#923978
    export function GetKnobValue(pin: SensorEnum): number {
        let ADCPin: AnalogPin;
        switch (pin) {
            case SensorEnum.portA:
                ADCPin = AnalogPin.P1;
                break;
            case SensorEnum.portB:
                ADCPin = AnalogPin.P2;
                break;
            case SensorEnum.portC:
                ADCPin = AnalogPin.P3;
                break;
            case SensorEnum.portD:
                ADCPin = AnalogPin.P4;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        if (adValue < 1) adValue = 0;
        if (adValue > 254) adValue = 255;
        return Math.round(adValue);
    }

    //% weight=90 block="蜂鸣器|接口%pin|%act"
    //% group="蜂鸣器"
    //% color=#B22222
    export function StartBuzzer(pin: SensorEnum, act: OnOffEnum): void {
        switch (pin) {
            case SensorEnum.portA:
                pins.digitalWritePin(DigitalPin.P0, act);
                break;
            case SensorEnum.portB:
                pins.digitalWritePin(DigitalPin.P13, act);
                break;
            case SensorEnum.portC:
                pins.digitalWritePin(DigitalPin.P14, act);
                break;
            case SensorEnum.portD:
                pins.digitalWritePin(DigitalPin.P15, act);
                break;
        }
    }

    /**
     * Play a melody from the melody editor.
     * @param melody - string of up to eight notes [C D E F G A B C5] or rests [-] separated by spaces, which will be played one at a time, ex: "E D G F B A C5 B "
     * @param tempo - number in beats per minute (bpm), dictating how long each note will play for
     */
    //% weight=80 block="蜂鸣器|接口%pin|播放旋律$melody|以速度$tempo拍速"
    //% group="蜂鸣器"
    //% color=#B22222
    //% melody.shadow="melody_editor"
    //% tempo.min=40 tempo.max=500
    //% tempo.defl=120
    export function PlayMusic(pin: SensorEnum, melody: string, tempo: number): void {
        switch (pin) {
            case SensorEnum.portA:
                pins.analogSetPitchPin(AnalogPin.P0);;
                break;
            case SensorEnum.portB:
                pins.analogSetPitchPin(AnalogPin.P13);;
                break;
            case SensorEnum.portC:
                pins.analogSetPitchPin(AnalogPin.P14);;
                break;
            case SensorEnum.portD:
                pins.analogSetPitchPin(AnalogPin.P15);;
                break;
        }
        music.playMelody(melody, tempo);
    }

    //% weight=90 block="声音|接口%pin|值(0~255)"
    //% group="声音"
    //% color=#F5CD2F
    export function GetSoundSensorValue(pin: SensorEnum): number {
        let ADCPin: AnalogPin;
        switch (pin) {
            case SensorEnum.portA:
                ADCPin = AnalogPin.P1;
                break;
            case SensorEnum.portB:
                ADCPin = AnalogPin.P2;
                break;
            case SensorEnum.portC:
                ADCPin = AnalogPin.P3;
                break;
            case SensorEnum.portD:
                ADCPin = AnalogPin.P4;
                break;
        }
        let n = 1000;
        let max = 0;
        let adValue = 0;
        for (let i = 0; i < n; i++) {
            let adValue = pins.analogReadPin(ADCPin);
            if (adValue > max) max = adValue;
        }
        return Math.round(max * 255 / 1023);
    }

    //% weight=90 block="碰撞|接口%pin|触发" 
    //% group="碰撞"
    //% color=#435493
    export function CollisionHappen(pin: SensorEnum): boolean {
        let status = 0;
        let flag: boolean = false;
        switch (pin) {
            case SensorEnum.portA:
                pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P0);
                if (status == 0) {
                    basic.pause(10);
                    status = pins.digitalReadPin(DigitalPin.P0);
                    if (status == 0) flag = true;
                }
                break;
            case SensorEnum.portB:
                pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P13);
                if (status == 0) {
                    basic.pause(10);
                    status = pins.digitalReadPin(DigitalPin.P13);
                    if (status == 0) flag = true;
                }
                break;
            case SensorEnum.portC:
                pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P14);
                if (status == 0) {
                    basic.pause(10);
                    status = pins.digitalReadPin(DigitalPin.P14);
                    if (status == 0) flag = true;
                }
                break;
            case SensorEnum.portD:
                pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P15);
                if (status == 0) {
                    basic.pause(10);
                    status = pins.digitalReadPin(DigitalPin.P15);
                    if (status == 0) flag = true;
                }
                break;
        }
        return flag;
    }

    const MICROBIT_MAKERBIT_ULTRASONIC_OBJECT_DETECTED_ID = 798;
    const MAX_ULTRASONIC_TRAVEL_TIME = 300 * 58;
    const ULTRASONIC_MEASUREMENTS = 3;
    interface UltrasonicRoundTrip {
        ts: number;
        rtt: number;
    }
    interface UltrasonicDevice {
        trig: DigitalPin | undefined;
        roundTrips: UltrasonicRoundTrip[];
        medianRoundTrip: number;
        travelTimeObservers: number[];
    }
    let ultrasonicState: UltrasonicDevice;

    //% weight=98 block="超声波|接口%pin|距离(cm)"
    //% group="超声波"
    //% color=#8470FF
    export function GetUltrasonicValue(pin: SensorEnum): number {
        let trig: DigitalPin;
        let echo: DigitalPin;
        let dist: number;
        switch (pin) {
            case SensorEnum.portA:
                trig = DigitalPin.P0;
                echo = DigitalPin.P1;
                break;
            case SensorEnum.portB:
                trig = DigitalPin.P13;
                echo = DigitalPin.P2;
                break;
            case SensorEnum.portC:
                trig = DigitalPin.P14;
                echo = DigitalPin.P3;
                break;
            case SensorEnum.portD:
                trig = DigitalPin.P15;
                echo = DigitalPin.P4;
                break;
        }
        //第一次用来检测传感器是否插入
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);
        //dist = pins.pulseIn(echo, PulseValue.High, 300 * 58); //read pulse该方法准确性不高
        let begintime = input.runningTimeMicros();
        while (pins.digitalReadPin(echo) == 0) {
            if ((input.runningTimeMicros() - begintime) > 500) return 300; //未检测到传感器
        }
        basic.pause(100);
        //第二次测距
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        //begintime = input.runningTimeMicros();
        //while (pins.digitalReadPin(echo) == 0) {
        //    if ((input.runningTimeMicros() - begintime) >  300 * 58) return 300; //未检测到传感器
        //}
        while (pins.digitalReadPin(echo) == 0);
        let starttime = input.runningTimeMicros();

        //begintime = input.runningTimeMicros();
        //while (pins.digitalReadPin(echo) == 1) {
        //    if ((input.runningTimeMicros() - begintime) > 300 * 58) return 300; //未检测到传感器
        //}
        while (pins.digitalReadPin(echo) == 1);
        let endtime = input.runningTimeMicros();
        dist = Math.idiv((endtime - starttime), 58);
        if (dist > 300) dist = 0;
        return dist;
    }

    //% weight=90 block="温湿度|接口%pin|值%dhtResult"
    //% group="温湿度"
    //% color=#E29B3F
    export function GetDHT11value(pin: SensorEnum, dhtResult: Dht11Result): number {
        let Dht11Pin: DigitalPin;
        switch (pin) {
            case SensorEnum.portA:
                Dht11Pin = DigitalPin.P0;
                break;
            case SensorEnum.portB:
                Dht11Pin = DigitalPin.P13;
                break;
            case SensorEnum.portC:
                Dht11Pin = DigitalPin.P14;
                break;
            case SensorEnum.portD: 0;
                Dht11Pin = DigitalPin.P15;
                break;
        }
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        for (let i = 0; i < 40; i++) dataArray.push(false);
        for (let i = 0; i < 5; i++) resultArray.push(0);
        pins.digitalWritePin(Dht11Pin, 0); //begin protocol, pull down pin
        basic.pause(18);
        pins.digitalReadPin(Dht11Pin); //pull up pin
        pins.setPull(Dht11Pin, PinPullMode.PullUp); //pull up data pin if needed
        control.waitMicros(40);
        let currenttime = input.runningTimeMicros();
        while (pins.digitalReadPin(Dht11Pin) == 1) { //主机拉高等待从机响应
            if ((input.runningTimeMicros() - currenttime) > 100) return 0.1;//未插入退出
        }
        while (pins.digitalReadPin(Dht11Pin) == 0); //从机拉低
        while (pins.digitalReadPin(Dht11Pin) == 1); //从机拉高

        //read data (5 bytes)
        for (let i = 0; i < 40; i++) {
            while (pins.digitalReadPin(Dht11Pin) == 1);
            while (pins.digitalReadPin(Dht11Pin) == 0);
            control.waitMicros(28);
            //if sensor still pull up data pin after 28 us it means 1, otherwise 0
            if (pins.digitalReadPin(Dht11Pin) == 1) dataArray[i] = true;
        }
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 8; j++)
                if (dataArray[8 * i + j]) resultArray[i] += 2 ** (7 - j);
        let humidity = resultArray[0] + resultArray[1] / 10;
        let temperature = resultArray[2] + resultArray[3] / 10;
        let fahrenheit = temperature * 9 / 5 + 32;
        basic.pause(100);
        switch (dhtResult) {
            case Dht11Result.Celsius: return temperature;
            case Dht11Result.Fahrenheit: return fahrenheit;
            case Dht11Result.humidity: return humidity;
        }
    }

    //% weight=90 block="摇杆|接口%pin|方向%value"
    //% group="摇杆"
    //% color=#0D69AB
    export function ISRockerDirectPress(pin: RockerEnum, value: RockerdirectEnum): boolean {
        let ADCPin1: AnalogPin;
        let ADCPin2: AnalogPin;
        let x;
        let y;
        let flag: boolean = false;
        let now_state = RockerdirectEnum.nostate;
        ADCPin1 = AnalogPin.P0;
        ADCPin2 = AnalogPin.P1;
        /*switch (pin) {         
            case RockerEnum.portA:
                ADCPin1 = AnalogPin.P0;
                ADCPin2 = AnalogPin.P1;
                break;
            case RockerEnum.portB:
                ADCPin1 = AnalogPin.P13;
                ADCPin2 = AnalogPin.P2;
                break;
            case RockerEnum.portC:
                ADCPin1 = AnalogPin.P14;
                ADCPin2 = AnalogPin.P3;
                break;
            case RockerEnum.portD:
                ADCPin1 = AnalogPin.P15;
                ADCPin2 = AnalogPin.P4;
                break;
        }*/
        x = pins.analogReadPin(ADCPin1);//x轴模拟量获取
        y = pins.analogReadPin(ADCPin2);//y轴模拟量获取
        if (x < 100) now_state = RockerdirectEnum.Down;
        else if (x > 800) now_state = RockerdirectEnum.Up;
        else if (y < 100) now_state = RockerdirectEnum.Right;
        else if (y > 800) now_state = RockerdirectEnum.Left;
        if (now_state == value)
            flag = true;
        else
            flag = false;
        return flag;
    }

    //% weight=80 block="摇杆|当接口%pin|方向%value时"
    //% group="摇杆"
    //% color=#0D69AB
    export function OnRockerDirectPress(pin: RockerEnum, value: RockerdirectEnum, body: () => void) {
        control.inBackground(function () {
            while (true) {
                if (ISRockerDirectPress(pin, value)) {
                    body();
                }
                basic.pause(20);
            }
        })
    }

    //% weight=70 block="摇杆|接口%pin|%xy|值(0~255)"
    //% group="摇杆"
    //% color=#0D69AB
    export function GetRockerValue(pin: RockerEnum, xy: RockerXYEnum): number {
        let ADCPin1: AnalogPin;
        let ADCPin2: AnalogPin;
        let x;
        let y;
        ADCPin1 = AnalogPin.P1;
        ADCPin2 = AnalogPin.P0;
        /*switch (pin) {         
            case RockerEnum.portA:
                ADCPin1 = AnalogPin.P0;
                ADCPin2 = AnalogPin.P1;
                break;
            case RockerEnum.portB:
                ADCPin1 = AnalogPin.P13;
                ADCPin2 = AnalogPin.P2;
                break;
            case RockerEnum.portC:
                ADCPin1 = AnalogPin.P14;
                ADCPin2 = AnalogPin.P3;
                break;
            case SensorEnum.portD:
                ADCPin1 = AnalogPin.P15;
                ADCPin2 = AnalogPin.P4;
                break;
        }*/
        x = 1023 - pins.analogReadPin(ADCPin1);//x轴模拟量获取
        y = pins.analogReadPin(ADCPin2);//y轴模拟量获取
        if (xy == RockerXYEnum.x) {
            let adValue = x * 255 / 1023;
            if (adValue < 1) adValue = 0;
            if (adValue > 254) adValue = 255;
            return Math.round(adValue);
        }
        else if (xy == RockerXYEnum.y) {
            let adValue = y * 255 / 1023;
            if (adValue < 1) adValue = 0;
            if (adValue > 254) adValue = 255;
            return Math.round(adValue);
        }
        return 0;
    }

    //% weight=90 block="红外避障|接口%pin|值(0~255)"
    //% group="红外避障"
    //% color=#DA8540
    export function GetIrValue(pin: SensorEnum): number {
        let ADCPin: AnalogPin;
        switch (pin) {
            case SensorEnum.portA:
                ADCPin = AnalogPin.P1;
                break;
            case SensorEnum.portB:
                ADCPin = AnalogPin.P2;
                break;
            case SensorEnum.portC:
                ADCPin = AnalogPin.P3;
                break;
            case SensorEnum.portD:
                ADCPin = AnalogPin.P4;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return Math.round(adValue);
    }

    const MICROBIT_MAKERBIT_IR_NEC = 777;
    const MICROBIT_MAKERBIT_IR_DATAGRAM = 778;
    const MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID = 789;
    const MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID = 790;
    const IR_REPEAT = 256;
    const IR_INCOMPLETE = 257;
    const IR_DATAGRAM = 258;

    interface IrState {
        protocol: IrProtocol;
        hasNewDatagram: boolean;
        bitsReceived: uint8;
        addressSectionBits: uint16;
        commandSectionBits: uint16;
        hiword: uint16;
        loword: uint16;
    }

    let irState: IrState;
    function appendBitToDatagram(bit: number): number {
        irState.bitsReceived += 1;

        if (irState.bitsReceived <= 8) {
            irState.hiword = (irState.hiword << 1) + bit;
            if (irState.protocol === IrProtocol.Keyestudio && bit === 1) {
                // recover from missing message bits at the beginning
                // Keyestudio address is 0 and thus missing bits can be detected
                // by checking for the first inverse address bit (which is a 1)
                irState.bitsReceived = 9;
                irState.hiword = 1;
            }
        } else if (irState.bitsReceived <= 16) {
            irState.hiword = (irState.hiword << 1) + bit;
        } else if (irState.bitsReceived <= 32) {
            irState.loword = (irState.loword << 1) + bit;
        }

        if (irState.bitsReceived === 32) {
            irState.addressSectionBits = irState.hiword & 0xffff;
            irState.commandSectionBits = irState.loword & 0xffff;
            return IR_DATAGRAM;
        } else {
            return IR_INCOMPLETE;
        }
    }

    function decode(markAndSpace: number): number {
        if (markAndSpace < 1600) {
            // low bit
            return appendBitToDatagram(0);
        } else if (markAndSpace < 2700) {
            // high bit
            return appendBitToDatagram(1);
        }

        irState.bitsReceived = 0;

        if (markAndSpace < 12500) {
            // Repeat detected
            return IR_REPEAT;
        } else if (markAndSpace < 14500) {
            // Start detected
            return IR_INCOMPLETE;
        } else {
            return IR_INCOMPLETE;
        }
    }

    function enableIrMarkSpaceDetection(pin: DigitalPin) {
        pins.setPull(pin, PinPullMode.PullNone);

        let mark = 0;
        let space = 0;

        pins.onPulsed(pin, PulseValue.Low, () => {
            mark = pins.pulseDuration();
        });

        pins.onPulsed(pin, PulseValue.High, () => {
            // LOW
            space = pins.pulseDuration();
            const status = decode(mark + space);

            if (status !== IR_INCOMPLETE) {
                control.raiseEvent(MICROBIT_MAKERBIT_IR_NEC, status);
            }
        });
    }

    //% weight=90 block="红外|接口%port|协议%protocol"
    //% group="红外接收"
    //% color=#A5995B
    export function connectIrReceiver(
        port: SensorEnum,
        protocol: IrProtocol
    ): void {
        let pin: DigitalPin;
        if (irState) {
            return;
        }

        switch (port) {
            case SensorEnum.portA:
                pin = DigitalPin.P0;
                break;
            case SensorEnum.portB:
                pin = DigitalPin.P13;
                break;
            case SensorEnum.portC:
                pin = DigitalPin.P14;
                break;
            case SensorEnum.portD:
                pin = DigitalPin.P15;
                break;
        }

        irState = {
            protocol: protocol,
            bitsReceived: 0,
            hasNewDatagram: false,
            addressSectionBits: 0,
            commandSectionBits: 0,
            hiword: 0, // TODO replace with uint32
            loword: 0,
        };

        enableIrMarkSpaceDetection(pin);

        let activeCommand = -1;
        let repeatTimeout = 0;
        const REPEAT_TIMEOUT_MS = 120;

        control.onEvent(
            MICROBIT_MAKERBIT_IR_NEC,
            EventBusValue.MICROBIT_EVT_ANY,
            () => {
                const irEvent = control.eventValue();

                // Refresh repeat timer
                if (irEvent === IR_DATAGRAM || irEvent === IR_REPEAT) {
                    repeatTimeout = input.runningTime() + REPEAT_TIMEOUT_MS;
                }

                if (irEvent === IR_DATAGRAM) {
                    irState.hasNewDatagram = true;
                    control.raiseEvent(MICROBIT_MAKERBIT_IR_DATAGRAM, 0);

                    const newCommand = irState.commandSectionBits >> 8;

                    // Process a new command
                    if (newCommand !== activeCommand) {
                        if (activeCommand >= 0) {
                            control.raiseEvent(
                                MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
                                activeCommand
                            );
                        }

                        activeCommand = newCommand;
                        control.raiseEvent(
                            MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID,
                            newCommand
                        );
                    }
                }
            }
        );

        control.inBackground(() => {
            while (true) {
                if (activeCommand === -1) {
                    // sleep to save CPU cylces
                    basic.pause(2 * REPEAT_TIMEOUT_MS);
                } else {
                    const now = input.runningTime();
                    if (now > repeatTimeout) {
                        // repeat timed out
                        control.raiseEvent(
                            MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
                            activeCommand
                        );
                        activeCommand = -1;
                    } else {
                        basic.pause(REPEAT_TIMEOUT_MS);
                    }
                }
            }
        });
    }

    //% weight=80 block="红外|当按键%button|%action时"
    //% group="红外接收"
    //% color=#A5995B
    export function onIrButton(
        button: IrButton,
        action: IrButtonAction,
        handler: () => void
    ) {
        control.onEvent(
            action === IrButtonAction.Pressed
                ? MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID
                : MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
            button === IrButton.Any ? EventBusValue.MICROBIT_EVT_ANY : button,
            () => {
                handler();
            }
        );
    }


    //% weight=70 block="红外|接收值"
    //% group="红外接收"
    //% color=#A5995B
    export function irButton(): number {
        basic.pause(0); // Yield to support background processing when called in tight loops
        if (!irState) {
            return IrButton.Any;
        }
        //return irState.commandSectionBits >> 8;
        switch (irState.commandSectionBits >> 8) {
            case 162: return 1;
            case 98: return 2;
            case 226: return 3;
            case 34: return 4;
            case 2: return 5;
            case 194: return 6;
            case 224: return 7;
            case 168: return 8;
            case 144: return 9;
            case 104: return 10;
            case 152: return 0;
            case 176: return 11;
            case 24: return 12;
            case 16: return 13;
            case 56: return 14;
            case 90: return 15;
            case 74: return 16;
            default: return 255;
        }
    }

    /*//% block="on IR datagram received"
    //% group="红外接收"
    //% weight=60*/
    function onIrDatagram(handler: () => void) {
        control.onEvent(
            MICROBIT_MAKERBIT_IR_DATAGRAM,
            EventBusValue.MICROBIT_EVT_ANY,
            () => {
                handler();
            }
        );
    }

    /*//% block="IR datagram"
    //% group="红外接收"
    //% weight=50*/
    function irDatagram(): string {
        basic.pause(0); // Yield to support background processing when called in tight loops
        if (!irState) {
            return "0x00000000";
        }
        return (
            "0x" +
            ir_rec_to16BitHex(irState.addressSectionBits) +
            ir_rec_to16BitHex(irState.commandSectionBits)
        );
    }

    /*//% block="IR data was received"
    //% group="红外接收"
    //% weight=40*/
    function IsIrDataReceived(): boolean {
        basic.pause(0); // Yield to support background processing when called in tight loops
        if (!irState) {
            return false;
        }
        if (irState.hasNewDatagram) {
            irState.hasNewDatagram = false;
            return true;
        } else {
            return false;
        }
    }

    /*//% block="IR button code %button"
    //% group="红外接收"
    //% weight=30*/
    function irButtonCode(button: IrButton): number {
        basic.pause(0); // Yield to support background processing when called in tight loops
        return button as number;
    }

    function ir_rec_to16BitHex(value: number): string {
        let hex = "";
        for (let pos = 0; pos < 4; pos++) {
            let remainder = value % 16;
            if (remainder < 10) {
                hex = remainder.toString() + hex;
            } else {
                hex = String.fromCharCode(55 + remainder) + hex;
            }
            value = Math.idiv(value, 16);
        }
        return hex;
    }

    //let strip: Buffer=hex`000000 000000 000000`;
    //% weight=98 block="RGB-彩灯|接口%pin|彩灯%light|红%red|绿%green|蓝%blue"
    //% inlineInputMode=inline
    //% group="RGB彩灯"
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    //% color=#CD9B9B
    export function SetRGBLight(pin: SensorEnum, light: LEDEnum, red: number, green: number, blue: number) {
        let strip = pins.createBuffer(9);
        strip[light * 3 + 0] = green;
        strip[light * 3 + 1] = red;
        strip[light * 3 + 2] = blue;
        switch (pin) {
            case SensorEnum.portA:
                sendBuffer(strip, DigitalPin.P0);
                break;
            case SensorEnum.portB:
                sendBuffer(strip, DigitalPin.P13);
                break;
            case SensorEnum.portC:
                sendBuffer(strip, DigitalPin.P14);
                break;
            case SensorEnum.portD:
                sendBuffer(strip, DigitalPin.P15);
                break;
        }
        basic.pause(20);
    }

    //% shim=sendBufferAsm
    function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }
    //% shim=setBufferMode
    function setBufferMode(pin: DigitalPin, mode: number) {
    }

    //% weight=90 block="压力传感器|接口%pin|值[0~255]"
    //% group="压力传感器"
    //% color=#4B974A
    export function GetIICPressureSensorValue(pin: PressureSensorEnum): number {
        let ADCPin: AnalogPin;
        switch (pin) {
            case PressureSensorEnum.PIN_5:
                ADCPin = AnalogPin.P1;
                break;
            case PressureSensorEnum.PIN_6:
                ADCPin = AnalogPin.P2;
                break;
            case PressureSensorEnum.PIN_7:
                ADCPin = AnalogPin.P3;
                break;
            case PressureSensorEnum.PIN_8:
                ADCPin = AnalogPin.P4;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);

        let data = Math.round(adValue*255/1024)
        return data;
    }

    //% weight=90 block="颜色传感器|读取%RGB"
    //% group="颜色传感器"
    //% color=#4B974A
    export function GetIICColorSensorValue(RGB: ColorSensorEnum): number {
        let data = IIC_Read_Color(RGB)

        if (RGB == ColorSensorEnum.B) {
            //校准蓝色，在检测蓝色是，蓝色灵敏度值低很多（绿色值反而大）
            data = data + 500
        }

        return data
    }
    function IIC_Read_Color(x: number): number  {
        pins.i2cWriteNumber(
            0x10,
            0x00000000,
            NumberFormat.UInt32BE,
            false
        )
        pins.i2cWriteNumber(
            0x10,
            x,       			   //写入颜色通道
            NumberFormat.UInt8BE,
            true
        )
        let DATA = pins.i2cReadNumber(
            0x10,
            NumberFormat.UInt16LE, //因为传感器是先发低八位，再发高八位，所以这里要配置LE先读低八位
            false
        )
        return DATA
    }


    //% weight=30 block="唤醒 小海小海"
    //% group="语音识别"
    //% color=#7CCD7C
    export function CallXiaoHai(body: () => void) {
        control.inBackground(function () {
            while (true) {
                if (i2c_read_YUYIN() != 0x00) {
                    body();
                }
                basic.pause(10);
            }
        })
    }

    //% weight=40 block="当说出|%entryKey词条"
    //% group="语音识别"
    //% color=#7CCD7C
    export function speechRecognition(entryKey: EntryEnum): boolean {
        let IsEntryKey: boolean = false;

        let data = i2c_read_YUYIN()
        switch (entryKey) {
            case EntryEnum.entry_1:
                IsEntryKey = entryKey == data ? true : false;
                break;
            case EntryEnum.entry_2:
                IsEntryKey = entryKey == data ? true : false;
                break;
            case EntryEnum.entry_3:
                IsEntryKey = entryKey == data ? true : false;
                break;
            case EntryEnum.entry_4:
                IsEntryKey = entryKey == data ? true : false;
                break;
            case EntryEnum.entry_5:
                IsEntryKey = entryKey == data ? true : false;
                break;
            case EntryEnum.entry_6:
                IsEntryKey = entryKey == data ? true : false;
                break;
            case EntryEnum.entry_7:
                IsEntryKey = entryKey == data ? true : false;
                break;
            case EntryEnum.entry_8:
                IsEntryKey = entryKey == data ? true : false;
                break;
            case EntryEnum.entry_9:
                IsEntryKey = entryKey == data ? true : false;
                break;
        }
        return IsEntryKey;
    }
    // iic读取语音模块数据
    function i2c_read_YUYIN(): number{     
        pins.i2cWriteNumber(
            0x20,                   //语音模块设备地址0x20
            0x00,       			//语音模块数据地址0x00
            NumberFormat.UInt8LE,   //入参2的数据格式设置（8位数字类型，先送低位）
            true                    //继续
        )
        let data = pins.i2cReadNumber(
            0x20,
            NumberFormat.UInt8LE,   //这里配置LE，读取数据时，先读低位
            false                   //结束读取
        )
        return data
    }

    /*********************************RFID 代码块 开始 **********************************/
    //*********iic写函数，设备地址00，adr为寄存器地址，val为写数据*******//
    function IIC_Write(adr: number, val: number) {
        let val_1 = ((adr << 8) | val)
        pins.i2cWriteNumber(
            0,
            val_1,
            NumberFormat.UInt16BE,
            false
        )
    }

    //*********iic读函数，设备地址00，adr为寄存器地址，返回DATA为数据*******//
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

    //********天线开启函数**************//
    function AntennaON() {
        temp = IIC_Read(TxControlReg)//0x14控制天线驱动器管脚TX1和TX2的寄存器
        if (~(temp & 0x03)) {
            SetBits(TxControlReg, 0x03)
        }
    }
    //*******设置使能天线发射载波13.56Mhz寄存器函数*********//
    function SetBits(reg: number, mask: number) {
        let tmp = IIC_Read(reg)
        IIC_Write(reg, (tmp | mask))
    }
    //*******天线关闭函数*************//
    function AntennaOFF() {
        ClearBits(TxControlReg, 0x03)////0x14控制天线驱动器管脚TX1和TX2的寄存器
    }
    //*******设置禁止天线发射载波13.56Mhz寄存器函数*********
    function ClearBits(reg: number, mask: number) {
        let tmp = IIC_Read(reg)
        IIC_Write(reg, tmp & (~mask))
    }

    //*******读取M1卡ID***********//
    function getID() {
        let id = readID()
        while (!(id)) {
            id = readID()
            if (id != undefined) {
                return id
            }
        }
        return id
    }
    //***********readID的主函数，读取M1卡的ID************//
    function readID() {
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
    //---------------readID的第一个函数----寻卡函数-------------//
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
    //-----------------readID的第二个函数-------------------//
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
    //------------------readID的第三个函数---------------------//
    function getIDNum(uid: number[]) {
        let a = 0

        for (let e = 0; e < 5; e++) {
            a = a * 256 + uid[e]
        }
        return a
    }
    //**************Read读取卡M1卡数据主函数***********/
    function read(): string {               //数据长度48个字节
        let text = readFromCard()
        while (!text) {
            let text = readFromCard()

            if (text != '') {
                return text
            }
        }
        return text
    }
    //*****读取的卡数据read()处理函数***********//
    //*****由于卡2扇区数据共48个字节（即48个字符），填入数据后，未填写的数据会自动补字符0（即16进制的0X20）***********//
    //*****这将导致海客LCD显示屏，显示的字符重叠，导致显示故障***************//
    //*****所以需要编写一个仅显示有效字符串，去除补位字符0 *//
    function ReadData_manage(): string {
        let manage_DATA: string
        let m_DATA_1: string = read()
        manage_DATA = m_DATA_1 != null ? m_DATA_1.trim() : 'NULL'   //.trim()为js语言去除两端空格的函数
        return manage_DATA
    }

    //------------Read读取卡M1卡数据第一个函数------------------//
    function readFromCard(): string {
        let [status, Type2] = Request(PICC_REQIDL)     //寻卡+复位应答
        if (status != 0) {
            return null
        }

        [status, uid] = AvoidColl()     //防多卡冲突机制

        if (status != 0) {
            return null
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
        }
        Crypto1Stop()
        return text_read
    }
    //---------Read读取卡M1卡数据第二个函数------------------------//
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
    //---------Read读取卡M1卡数据第三个函数------------------------//
    function Authent(authMode: number, BlockAdr: number, Sectorkey: number[], SerNum: number[]) {
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
    //---------Read读取卡M1卡数据第四个函数------------------------//
    function ReadRFID(blockAdr: number) {
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
    //---------Read读取卡M1卡数据第六个函数------------------------//
    function CRC_Calculation(DataIn: number[]) {
        ClearBits(DivIrqReg, 0x04)
        SetBits(FIFOLevelReg, 0x80)
        for (let s = 0; s < (DataIn.length); s++) {
            IIC_Write(FIFODataReg, DataIn[s])
        }
        IIC_Write(CommandReg, 0x03)
        let t = 0xFF

        while (true) {
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

    /**************write卡数据的主函数*********************/
    function write(text: string) {
        let id = writeToCard(text)

        let flag = 1;
        while (!id && flag <= 3) {
            let id = writeToCard(text)

            flag += 1
        }
    }
    //---------write卡数据的第一个函数------------------------//
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
        // serial.writeLine("Written to Card")
        return id
    }
    //---------write卡数据的第二个函数------------------------//
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

    //*****初始化***********//
    function Init() {
        IIC_Write(CommandReg, PCD_RESETPHASE)//掉电和命令寄存器，0x0F软复位
        IIC_Write(TModeReg, 0x8D)//0x2A内部定时器的设置寄存器，0x8D*****
        IIC_Write(TPrescalerReg, 0x3E)//0x2B内部定时器的设置寄存器，0x3E***
        IIC_Write(TReloadRegL, 0x1E)//0x2D定义16位定时器的重载值寄存器，30***
        IIC_Write(TCounterValueRegH, 0x00)//0x2E 16位定时器的计数值寄存器，0
        IIC_Write(TxAutoReg, 0x40)//0x15控制天线驱动器设置的寄存器，0x40
        IIC_Write(ModeReg, 0x3D)//0x11当以发送和接收通用模式的寄存器，0x3D
        AntennaON()
    }
    //*******查找版本号*并用MB主板LED点阵显示************//可能仅适用于RC522芯片，ws1850s芯片无法读取
    function GetVersion_LED() {
        let Version = IIC_Read(VersionReg)
        if (Version == 0x91) { basic.showString("Version: V1.0") }
        else if (Version == 0x92) { basic.showString("Version: V2.0") }
        else if (Version == 0x00 || Version == 0xff) { basic.showString("WARNING: Communication failure") }
        else { basic.showString("Version: unknown") }
    }

    //*******查找版本号*并用海客套件LCD显示************//可能仅适用于RC522芯片，ws1850s芯片无法读取
    function GetVersion_LCD() {
        let Version = IIC_Read(VersionReg)
        if (Version == 0x91) { hicbit.SetLCDString(6, 1, "Version: V1.0") }
        else if (Version == 0x92) { hicbit.SetLCDString(6, 1, "Version: V2.0") }
        else if (Version == 0x00 || Version == 0xff) { hicbit.SetLCDString(6, 1, "WARNING: Communication failure") }
        else { hicbit.SetLCDString(6, 1, "Version: unknown") }
    }

    //% weight=90 block="打开RFID"
    //% group="RFID"
    //% color=#4B974A
    export function RFID_Init() {
        Init()
    }

    //% weight=90 block="关闭RFID"
    //% group="RFID"
    //% color=#4B974A
    export function RFID_OFF() {
        AntennaOFF()
    }

    //% weight=90 block="读取卡ID"
    //% group="RFID"
    //% color=#4B974A
    export function RFID_readID(): number {
        return readID()
    }

    //% weight=90 block="读取卡内部数据"
    //% group="RFID"
    //% color=#4B974A
    export function RFID_readData(): string {
        return ReadData_manage()
    }

    //% weight=90 block="写入数据到卡内部|数据内容%data"
    //% group="RFID"
    //% color=#4B974A
    export function RFID_writeData(data: string) {
        write(data)
    }
    /*********************************RFID 代码块 结束 **********************************/
}