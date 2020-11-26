export class Queue {
  items: Array<object>

  constructor() {
    this.items = []
  }

  enqueue(item: object) {
    this.items.push(item)
  }
}
