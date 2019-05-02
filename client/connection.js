const url = 'ws://localhost:8080'
const connection = new WebSocket(url)
let ready = false;

let id = Math.random().toString()

connection.onopen = () => {
    ready = true;
    connection.send(JSON.stringify({
        id,
        x: 0,
        y: 0,
        dir: {
            x: 0,
            y: 0
        }
    }))
}

connection.onerror = error => {
    console.log(`WebSocket error: ${error}`)
}

connection.onmessage = e => {
    data = JSON.parse(e.data);
    // console.log(data)
    entities = []
    for (key in data) {
        // console.log(new OtherPlayer(data[key].x, data[key].y, data[key].dir))
        if (id != key) entities.push(new OtherPlayer(data[key].x, data[key].y, data[key].dir))
    }
}

function sendLocation(x, y, dir) {
    connection.send(JSON.stringify({
        id,
        x,
        y,
        dir
    }))
}