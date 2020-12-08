import Debug from "debug"

const debug = Debug("msqs:queue")

export class Queue {
  items: Array<object>

  constructor() {
    this.items = []
  }

  enqueue(item: object) {
    this.items = [...this.items, item]
    debug(`➕ item enqueued, queue length ${this.items.length}`)
  }

  dequeue() {
    const [item, ...rest] = this.items
    this.items = rest
    debug(`➖ item dequeued, queue length ${this.items.length}`)
    return item
  }
}
