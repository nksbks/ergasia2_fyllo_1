input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.setBrightness(255)
    basic.showNumber(input.lightLevel())
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    led.setBrightness(128)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.setVolume(128)
    music.playMelody("C5 B A G F E D C ", 128)
    music.playMelody("C D E F G A B C5 ", 128)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    led.setBrightness(255)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.setVolume(255)
    music.playMelody("C5 B A G F E D C ", 255)
    music.playMelody("C D E F G A B C5 ", 255)
    basic.clearScreen()
})
