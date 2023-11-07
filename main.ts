/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Nov 2023
 * This program moves LED's diagonaly across the microbit
*/

let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Silly)
basic.pause(500)
basic.clearScreen()

// p seress "A" button
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)
  while (loopCounter <= 5) {
    basic.pause(500)
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter + 1
  }
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})

// press "B" button
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  loopCounter = 5
  sprite = game.createSprite(5, 5)
  while (loopCounter >= -1) {
    basic.pause(500)
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter - 1
  }
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
