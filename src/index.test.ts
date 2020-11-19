import { MichaelScottQueueService } from "./index"

describe("MichaelScottQueueService", () => {
  it("should create a queue", async () => {
    const msqs = new MichaelScottQueueService()

    expect(msqs).toBeDefined()
  })
})
