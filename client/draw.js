let ctx = document.getElementById("game").getContext("2d");

const radToDeg = 180 / Math.PI
const degToRad = Math.PI / 180

function rect(x, y, w, h) {
    // console.log(camera)
    ctx.fillRect(offX(x), offY(y), w, h)
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(offX(x), offY(y), r, 0, 2 * Math.PI);
    ctx.fill();
}

function etriangle(x, y, h, angle) { //r in radians
    let theta = angle
    ctx.beginPath();
    let halfside = (h / (3 ** .5));
    ctx.moveTo(offX(x) + halfside * Math.cos(Math.PI / 2 + theta), offY(y) + halfside * Math.sin(Math.PI / 2 + theta));
    ctx.lineTo(offX(x) + halfside * Math.cos(theta - Math.PI / 2), offY(y) + halfside * Math.sin(theta - Math.PI / 2));
    ctx.lineTo(offX(x) + h * Math.cos(theta), offY(y) + h * Math.sin(theta));
    ctx.closePath();
    ctx.fill()

}

function offX(x) {
    return x - camera.x + WIDTH / 2
}

function offY(y) {
    return y - camera.y + HEIGHT / 2
}