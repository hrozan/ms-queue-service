import { createServer } from "http"
import { Socket } from "socket.io"

export const createMSQSServer = (port: number) => {
  const server = createServer()
  const io = require("socket.io")(server)

  /** Graceful Shutdown */
  process.on("SIGTERM", async () => await server.close())
  process.on("SIGINT", async () => await server.close())

  server.on("error", (err: any) => {
    throw err
  })

  server.listen(port, () => {
    console.log("Server is running...")
  })

  io.on("connection", (socket: Socket) => {
    console.log(socket.connected)
  })

  setTimeout(() => {
    io.emit("connection", { alo: "alo" })
  }, 1000)
}
