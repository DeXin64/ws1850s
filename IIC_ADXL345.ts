/**
 * makecode Four Digit Display (TM1650) Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

/**
 * TM1650 digit Display
 */
//% weight=100 color=#64C800 icon="\uf136" block="ADXL345"
namespace ADXL345 {

    // 指令从机地址
    let COMMAND_I2C_ADDRESS = 0xA6
    // 数据寄存器地址
    let DATA_I2C_ADDRESS = 0x34

    let _intensity = 3


    //% blockId="ADXL345_getSpeed" block="陀螺仪|读取速率"
    //% weight=50 blockGap=8
    export function getSpeed(): number {
        pins.i2cWriteNumber(COMMAND_I2C_ADDRESS, 0x2C, NumberFormat.Int8BE)
        return pins.i2cReadNumber(COMMAND_I2C_ADDRESS, NumberFormat.Int8BE)
    }

}