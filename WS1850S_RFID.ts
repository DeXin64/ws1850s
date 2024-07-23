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
  
    
    let status = 0
    let version = ''

    //% weight=90 block="版本2"
    //% group="公共"
    //% color=#4B974A
    export function getVersion(): string {
        [status, version] = readId2()
        return version
    }

    function readId2(): [number, string] {
        return [1, 'V1.0']
    }

}