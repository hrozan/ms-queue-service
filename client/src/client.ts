import Debug from "debug"
import { io, Socket } from "socket.io-client"

const debug = Debug("msqs:client")

export class MSQSClient {
  private socket: Socket

  constructor(socket: Socket) {
    this.socket = socket
    this.socket.on("connection", this.onConnection)
  }

  onConnection() {
    debug("client connected")
  }

  sendMessage(payload: any) {
    debug(`sending message, payload:${payload}`)
    this.socket.emit("send-message", payload)
  }
}

export const createMSQSClient = (connectionString?: string): Promise<MSQSClient> =>
  new Promise((resolve) => {
    const socket = io(connectionString || "http://localhost:2307")
    socket.connect()
    resolve(new MSQSClient(socket))
  })
