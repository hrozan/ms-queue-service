import Debug from "debug"
import { createServer, Server as HttpServer } from "http"
import { Server, Socket } from "socket.io"
import { Queue } from "./core/queue"

const debug = Debug("msqs:server")

export interface MSQSServerConfig {
  port: number
}

export class MSQSServer {
  private config: MSQSServerConfig
  private httpServer: HttpServer
  private io: Server
  private queue: Queue

  constructor(config: MSQSServerConfig, httpServer: HttpServer, io: Server, queue: Queue) {
    this.config = config
    this.io = io
    this.httpServer = httpServer
    this.queue = queue

    this.onConnection()
  }

  private onConnection() {
    this.io.on("connection", (socket: Socket) => {
      debug("message received", { code: socket.request.statusCode })
    })
  }

  close() {
    return new Promise((resolve, reject) => {
      this.io.close((err: Error | undefined) => {
        if (err) {
          debug("error closing connection")
          reject()
        }
        debug("closed")
        resolve()
      })
    })
  }

  isHttpServerListening(): boolean {
    return this.httpServer.listening
  }

  startHttpServer(resolve: Function, reject: Function) {
    this.httpServer.on("error", (err: Error) => {
      reject(err)
    })

    this.httpServer.listen(this.config.port, () => {
      debug("http server listening")
      resolve(this)
    })
  }
}

export const createMSQSServer = (config: MSQSServerConfig): Promise<MSQSServer> =>
  new Promise((resolve, reject) => {
    {
      const httpServer = createServer()
      const io = new Server(httpServer, {})
      const queue = new Queue()
      new MSQSServer(config, httpServer, io, queue).startHttpServer(resolve, reject)
    }
  })
