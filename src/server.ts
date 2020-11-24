import { createServer } from "net"

export const createMSQSServer = (port: number) => {
  const server = createServer((c) => {
    console.log("client connected")
    c.on("end", () => {
      console.log("client disconnected")
    })
    c.write("hello\r\n")
    c.pipe(c)
  })

  server.on("error", (err) => {
    throw err
  })

  return server.listen(port, () => {
    console.log("server bound")
  })

}

