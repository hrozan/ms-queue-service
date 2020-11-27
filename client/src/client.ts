import { io, Socket } from "socket.io-client"

export class MSQSClient {
  private socket: Socket

  constructor(socket: Socket) {
    this.socket = socket
    this.socket.on("connection", this.onConnection)
  }

  onConnection() {
    console.log("client connected")
  }
}

export const createMSQSClient = () =>
  new Promise((resolve) => {
    const socket = io("http://localhost:2307")
    socket.connect()
    console.log(socket.connected)
    resolve(new MSQSClient(socket))
  })
