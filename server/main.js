const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 8080
})

let data = {}
let lastSent = {}

wss.on('connection', ws => {
    ws.on('message', message => {
        // console.log(`Received message => ${message}`)
        let msg = JSON.parse(message)
        data[msg.id] = {
            dir: msg.dir,
            x: msg.x,
            y: msg.y
        }
        lastSent[msg.id] = Date.now()
        for (key in lastSent) {
            if (Date.now() - lastSent[key] >= 2000) {
                delete lastSent[key]
                delete data[key]
            }
        }
        ws.send(JSON.stringify(data))
    })
})