import { Queue } from "./index"

describe("Queue", () => {
  it("should queue one item ", async () => {
    const queue = new Queue()

    queue.enqueue({ value: 1 })

    expect(queue.items.length).toBe(1)
  })

  it("should dequeue one item from queue", async () => {
    const item = { value: 1 }
    const queue = new Queue()
    queue.enqueue(item)

    const result = queue.dequeue()

    expect(result).toBe(item)
  })
})
