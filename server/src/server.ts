import Debug from "debug"
import { createServer, Server as HttpServer } from "http"
import { Server } from "socket.io"

const debug = Debug("msqs:server")

export interface MSQSServer {
  httpServer: HttpServer
  io: Server
}

export interface MSQSServerConfig {
  port: number
}

export const createMSQSServer = (config: MSQSServerConfig): Promise<MSQSServer> =>
  new Promise((resolve, reject) => {
    {
      const httpServer = createServer()
      const io = new Server(httpServer, {})

      const result = {
        httpServer,
        io,
      }

      httpServer.on("error", (err: Error) => {
        reject(err)
      })

      httpServer.listen(config.port, () => {
        debug("http server listening")
        resolve(result)
      })
    }
  })
