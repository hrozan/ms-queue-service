export class Queue {
  items: Array<object>

  constructor() {
    this.items = []
  }

  enqueue(item: object) {
    this.items = [...this.items, item]
  }

  dequeue() {
    const [item, ...rest] = this.items
    this.items = rest
    return item
  }
}
