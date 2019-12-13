sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    randomSprite.destroy()
    game.splash("No more Christmas")
    scene.setBackgroundColor(11)
    Krampus.say("Hahahahaha")
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    randomSprite.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    Krampus.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
let Krampus: Sprite = null
let randomSprite: Sprite = null
scene.setBackgroundColor(13)
randomSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 7 7 5 . . . . . . 
. . . . . . 7 8 7 7 . . . . . . 
. . . . . 7 7 7 7 a 7 . . . . . 
. . . . . 7 2 7 7 8 7 . . . . . 
. . . . 7 7 a 7 7 7 a 7 . . . . 
. . . . 8 7 7 8 7 7 7 7 . . . . 
. . . . 7 7 2 7 7 2 7 a . . . . 
4 . 4 7 7 a 7 7 7 7 7 7 7 4 . 4 
2 4 2 2 8 7 a 7 7 7 7 8 7 8 4 8 
2 4 2 7 7 7 7 7 8 7 a 7 2 8 4 8 
2 2 2 . . . . e e . . . . 8 8 8 
`, SpriteKind.Player)
randomSprite.setPosition(134, 29)
Krampus = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . . 2 2 2 . . 2 2 2 2 1 
. . . . . d f d d d . . . . 1 1 
. . . . . d d d d d . . . . . . 
. . . . . f f f d d f . . . . . 
. . . . . d d f d d b b b . . . 
. . . . . d d d d d f 2 2 b . . 
. . . . . . f f f f f b 2 2 b . 
. . f f f f f f f f f f b 2 2 b 
. f f . . . f f f f f f b b b 2 
. f . . . . f f f f f f b b b b 
. . . . . . f f f f f f b 2 b b 
. . . . . . f f f f f f b b 2 b 
. . . . . . f f f f f f . b b 2 
`, SpriteKind.Enemy)
game.splash("\"This is my Krampus Game\"")
