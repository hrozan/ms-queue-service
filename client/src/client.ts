import Debug from "debug"
import { io } from "socket.io-client"

const debug = Debug("msqs:client")

export type MSQSClient = {
  sendMessage: (payload: any) => void
}

export const createMSQSClient = (connectionString?: string): Promise<MSQSClient> =>
  new Promise((resolve) => {
    const socket = io(connectionString || "http://localhost:2307")
    socket.connect()

    socket.on("connection", () => {
      debug("client connected")
    })

    const sendMessage = (payload: any) => {
      debug(`sending message`)
      socket.emit("send-message", payload)
    }
    const client: MSQSClient = {
      sendMessage,
    }
    resolve(client)
  })
