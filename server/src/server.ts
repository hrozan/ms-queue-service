import { createServer, Server as HttpServer } from "http"
import { Server } from "socket.io"

export interface MSQSServer {
  httpServer: HttpServer
  io: Server
}

export const createMSQSServer = (port: number): Promise<MSQSServer> =>
  new Promise((resolve, reject) => {
    {
      const httpServer = createServer()
      const io = new Server(httpServer, {})

      httpServer.on("error", (err: Error) => {
        console.error(`Error on connection: ${err}`)
        reject(err)
      })

      httpServer.listen(port, () => {
        console.log("http server listening")
        resolve({
          httpServer,
          io,
        })
      })
    }
  })
