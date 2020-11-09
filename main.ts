controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    COSO = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 2 2 2 2 . . . . . . 
        . . . 8 8 5 4 5 4 5 2 . . . . . 
        . . . . . 8 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Space_Planooo, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let NEMOCIO: Sprite = null
let COSO: Sprite = null
let Space_Planooo: Sprite = null
Space_Planooo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f . . . . . . . . 
    . . 6 6 6 6 6 . . f 8 . . . . . 
    . . 6 8 8 8 6 6 6 6 7 8 . . . . 
    4 5 4 4 4 5 8 7 7 7 f 7 8 . . . 
    5 4 5 5 4 4 8 7 7 7 f 7 8 . . . 
    . . 6 8 8 8 6 6 6 6 7 8 . . . . 
    . . 6 6 6 6 6 . . f 8 . . . . . 
    . . f f f f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Space_Planooo.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
controller.moveSprite(Space_Planooo, 200, 200)
game.onUpdateInterval(500, function () {
    NEMOCIO = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b a c . 
        f f c 3 b c 3 b c f b a a c c . 
        f c b b b b b b c f a c b c c . 
        c c 1 1 b 1 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c 2 c c . . 
        c f 1 f f 1 f b b b 2 2 c . . . 
        f f f f f f f b b a b f c . . . 
        f f 2 2 2 2 f b a a b f c c . . 
        . f 2 2 2 2 2 b a b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    NEMOCIO.setVelocity(-100, 0)
    NEMOCIO.setPosition(180, randint(0, 120))
})
