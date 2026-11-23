controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (frog.overlapsWith(fly)) {
        game.gameOver(true)
    } else {
        info.changeLifeBy(-1)
    }
})
let fly: Sprite = null
let frog: Sprite = null
scene.setBackgroundImage(flies_imgs.background)
frog = sprites.create(flies_imgs.frog, SpriteKind.Player)
frog.setPosition(80, 103)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(100, 100)
fly.setBounceOnWall(true)
info.startCountdown(5)
