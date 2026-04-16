/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: katherine
 * Created on: Apr 20266666
 * This program will send a top secret message to my evil neighbor sophia :)
*/

radio.setGroup(185)
basic.showIcon(IconNames.Happy)

// while loop
while (true) {
    const distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

    // if less
    if (distance < 10) {
        basic.clearScreen()
        radio.sendString("Too close Sophia!!")
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    
    } else {
        basic.clearScreen()
        basic.showNumber(distance)
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    }
}
