import { createMSQSServer, MSQSServer } from "../src/server"

describe("MSQSServer", () => {
  let server: MSQSServer

  afterEach(async () => {
    if (server !== undefined) {
      await server.close()
    }
  })

  it("should create a server", async () => {
    server = await createMSQSServer({ port: 2307 })

    expect(server.isHttpServerListening()).toBeTruthy()
  })
})
