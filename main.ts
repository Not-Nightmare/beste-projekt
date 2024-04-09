input.onButtonPressed(Button.A, function () {
    if (!(spielAktiv)) {
        basic.showString("Hello World")
    }
})
input.onButtonPressed(Button.AB, function () {
    spielAktiv = true
    starteSpiel()
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    if (!(spielAktiv)) {
        basic.showString("Goodbye World")
    }
})
function starteSpiel () {
    for (let index = 0; index < 7; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    korb = game.createSprite(2, 4)
    game.setLife(3)
    game.setScore(0)
    Ball = game.createSprite(randint(0, 4), 0)
    basic.forever(function () {
        if (spielAktiv) {
            Ball.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
            if (Ball.get(LedSpriteProperty.Y) == 4) {
                if (korb.isTouching(Ball)) {
                    game.removeLife(1)
                } else {
                    game.addScore(1)
                }
                Ball.set(LedSpriteProperty.X, randint(0, 4))
                Ball.set(LedSpriteProperty.Y, 0)
            }
        }
    })
}
let korb: game.LedSprite = null
let Ball: game.LedSprite = null
let spielAktiv = false
