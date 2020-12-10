import Debug from "debug"
import { createServer, Server as HttpServer } from "http"
import { Server, Socket } from "socket.io"
import { Queue } from "./core/queue"

const debug = Debug("msqs:server")

export type MSQSServerConfig = {
  port: number
}

export type MSQSServer = {
  httpServer: HttpServer
  io: Server
  close: () => Promise<unknown>
}

export const startMSQSServer = (config: MSQSServerConfig): Promise<MSQSServer> =>
  new Promise((resolve, reject) => {
    {
      const httpServer = createServer()
      const io = new Server(httpServer, {})
      const queue = new Queue()

      const close = () =>
        new Promise((resolve, reject) => {
          io.close((err: Error | undefined) => {
            if (err) {
              debug("error closing connection")
              reject()
            }
            debug("closed")
            resolve()
          })
        })

      const server: MSQSServer = {
        httpServer,
        io,
        close
      }

      const onMessageReceived = (payload: Object) => {
        debug(`✉  message received on ${Date.now()}`)
        queue.enqueue(payload)
      }

      const onMessageConsume = () => {
        const payload = queue.dequeue()
        io.emit("return-consume-message", payload)
      }

      io.on("connection", (socket: Socket) => {
        socket.on("send-message", onMessageReceived)
        socket.on("consume-message", onMessageConsume)
      })

      httpServer.on("error", (err) => reject(err))
      httpServer.listen(config.port, () => {
        debug(`🖥  listening on port: ${config.port}`)
        resolve(server)
      })
    }
  })
