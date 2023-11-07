"""
Created by: Clara
Created on: Nov 2023
This module is a Micro:bit MicroPython program moves LEDs on the Micro:bit diagonally.
"""

from microbit import *

# variables
set_pixel = None
loopCounter = 0

# Setup
display.show(Image.SILLY)
display.clear()
sleep(500)

# Press button A
while True:
    if button_a.is_pressed():
        display.clear()
        loopCounter = 0
        display.set_pixel (x, y.value)

        while loopCounter <= 5:
            sleep(500)
            set_pixel(LEDSpriteProperty.X, loopCounter)
            set_pixel(LEDSpriteProperty.Y, loopCounter)
            loopCounter = loopCounter + 1

        set_pixel.delete()
        display.show(Image.SILLY)

        # Press button B
        if button_b.is_pressed():
            display.clear()
            loopCounter = 5
            display.set_pixel (x, y.value)

        while loopCounter >= -1:
            sleep(500)
            set_pixel(LEDSpriteProperty.X, loopCounter)
            set_pixel(LEDSpriteProperty.Y, loopCounter)
            loopCounter = loopCounter - 1

        set_pixel.delete()
        display.show(Image.SILLY)
