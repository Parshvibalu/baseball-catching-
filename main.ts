namespace SpriteKind {
    export const Mitt = SpriteKind.create()
    export const Baseball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Mitt, SpriteKind.Baseball, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    mitt.y += -5
    pause(100)
    mitt.y += 5
})
let baseball: Sprite = null
let mitt: Sprite = null
info.startCountdown(20)
mitt = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e e e e e 
    . e e e e d d d e d d d e d d e 
    . e d d e d d d e d d d e d d e 
    . e d d e d d d e d d d e d d e 
    . e d d e d d d e d d d e d d e 
    . e d d e d d d e d d d e d d e 
    . e d d e d d d e d d d e d d e 
    . e d d d d d d d d d d d d d e 
    . e d d d d d d d d d d d d d e 
    . e d d d d d d d d d d d d d e 
    . . e e e e e e e e e e e e e e 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Mitt)
controller.moveSprite(mitt)
mitt.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    baseball = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 2 1 1 1 1 1 2 . . . . . 
        . . . 1 1 2 1 1 1 2 1 1 . . . . 
        . . 1 1 1 1 2 1 2 1 1 1 1 . . . 
        . 1 1 1 1 1 2 1 2 1 1 1 1 1 . . 
        . 1 1 1 1 1 2 1 2 1 1 1 1 1 . . 
        . 1 1 1 1 1 2 1 2 1 1 1 1 1 . . 
        . . 1 1 1 2 1 1 1 2 1 1 1 . . . 
        . . . 1 2 1 1 1 1 1 2 1 . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -50, -50)
    baseball.setPosition(randint(0, 160), randint(0, 100))
    baseball.setKind(SpriteKind.Baseball)
})
