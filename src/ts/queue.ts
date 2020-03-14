export default class Queue<T> {
  private items = {};
  private count = 0;
  private stepNum = 0;

  enQueue(elem): void {
    this.items[this.count] = elem;
    this.count ++;
  }

  deQueue(): T {
    const temV = this.peek();
    delete this.items[this.stepNum];
    this.stepNum++;
    return temV;
  }

  peek(): T {
    return this.items[this.stepNum];
  }

  toString(): string {
    let str = '', i: number;
    for (i = this.stepNum; i < this.count; i++) {
      if (i === this.stepNum) {
        str = str + `${this.items[i]}`;
      } else {
        str = str + `,${this.items[i]}`;
      }
    }
    return str;
  }

  isEmpty(): boolean {
    return this.count - this.stepNum === 0;
  }

  size(): number {
    return this.count - this.stepNum;
  }

  clear(): void {
    this.items = {};
    this.count = 0;
    this.stepNum = 0;
  }
}
