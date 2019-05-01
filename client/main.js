let lastTime = Date.now()
let input = {

}

let WIDTH = 600;
let HEIGHT = 600;

let theMap = new Map(100, 30, 30)
let camera = {
    x: 0,
    y: 0
}

let player = new Player()

function setup() {
    window.addEventListener("keydown", e => keyDownHandler(e))
    window.addEventListener("keyup", e => keyUpHandler(e))
    window.requestAnimationFrame(step)
}

function step() {
    let dt = (Date.now() - lastTime) / 50
    lastTime = Date.now()
    inputStep(dt)
    physicsStep()
    drawStep()
    window.requestAnimationFrame(step)
}


function inputStep(dt) {
    camera.y -= !!input.up * dt * 5;
    camera.y += !!input.down * dt * 5;
    camera.x += !!input.right * dt * 5;
    camera.x -= !!input.left * dt * 5;
    player.x = camera.x;
    player.y = camera.y
}

function physicsStep() {

}

function drawStep() {
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, 600, 600)
    theMap.draw()
    player.draw()
}

setup()