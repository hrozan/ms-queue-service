import { Queue } from "./index"

describe("Queue", () => {
  it("should add one item to the queue", async () => {
    const queue = new Queue()

    queue.enqueue({
      value: "asdfas",
    })

    expect(queue.items.length).toBe(1)
  })
})
