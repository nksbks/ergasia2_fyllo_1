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
    led.setBrightness(input.lightLevel())
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.setVolume(input.lightLevel())
    music.playMelody("C5 B A G F E D C ", input.lightLevel())
    music.playMelody("C D E F G A B C5 ", input.lightLevel())
    basic.clearScreen()
})
