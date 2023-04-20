input.onButtonPressed(Button.A, function () {
    music.playMelody("A F E F D G E F ", 240)
    images.iconImage(IconNames.Angry).showImage(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        `)
})
