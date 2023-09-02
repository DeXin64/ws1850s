/**
 * makecode Four Digit Display (TM1650) Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

enum ChannelEnum {
    //% block="红色"
    i2c_read_r = 0x08,
    //% block="绿色"
    i2c_read_g = 0x09,
    //% block="蓝色"
    i2c_read_b = 0x0A,
    //% block="白色"
    i2c_read_w = 0x0b,
}

/**
 * TM1650 digit Display
 */
//% weight=100 color=#64C800 icon="\uf136" block="VEML6040A3OG"
namespace VEML6040A3OG {

    //% help=pins/i2c-VEML6040A3OG_Init blockGap=8 advanced=true
    //% blockId=VEML6040A3OG_Init block="初始化VEML6040A3OG" weight=1
    //% weight=50 blockGap=8
    export function InitVEML6040A3OG() {
        pins.i2cWriteNumber(
            0x10,                    //设备地址为0x10
            0x00000000,              //寄存器地址为00，配置低八位00，高八位00，（最后一个字节00因为函数库问题无法消除，但不影响功能）
            NumberFormat.UInt32BE,   //只能选8/16/32，设置BE，先发送高八位数据   
            false
        )
    }

    //% help=pins/i2c-read-number blockGap=8 advanced=true
    //% blockId=VEML6040A3OG_readColorNumber block="读取颜色值|%X色通道" weight=2
    //% weight=50 blockGap=8
    export function readColorNumber(x: ChannelEnum): number {
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

        if (x == ChannelEnum.i2c_read_b) {
            DATA += 500
        }

        return DATA
    }

}