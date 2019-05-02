let lastTime = Date.now()
let input = {

}

let WIDTH = 600;
let HEIGHT = 600;
let lastSynced = 0;

let theMap = new Map(100, 30, 30)
let camera = {
    x: 0,
    y: 0
}

let player = new Player()
let entities = []

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
    clientOnlyMovementStep(dt)
    drawStep()
    if (ready) sendStep()
    window.requestAnimationFrame(step)
}

function clientOnlyMovementStep(dt) {
    for (let i = 0; i < entities.length; i++) {
        entities[i].x += entities[i].dir.x * dt * 4
        entities[i].y -= entities[i].dir.y * dt * 4
    }
}

function sendStep() {
    if (Date.now() - lastSynced > 1000 / 1) {
        lastSynced = Date.now()
        sendLocation(player.x, player.y, calcDir())
    }
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
    entities.forEach(ent => ent.draw())
}

setup()