export default class StackArray<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(elements: T): void {
    this.items.push(elements);
  }

  pop(): T {
    if (this.size() <= 0) {
      return undefined;
    }
    return this.items.pop();
  }

  size(): number {
    return this.items.length;
  }

  peek(): T {
    return this.items[this.size() - 1];
  }

  clear(): void {
    this.items = [];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  toString(): string {
    return this.items.toString();
  }

  toArray(): T[] {
    return this.items;
  }
}
