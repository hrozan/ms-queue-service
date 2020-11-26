import { createMSQSServer, MSQSServer } from "../src/server"

describe("MSQSServer", () => {
  it("should create a server", async () => {
    const server = await createMSQSServer({ port: 5555 })

    expect(server.httpServer.listening).toBeTruthy()
    server.io.close()
  })
})
