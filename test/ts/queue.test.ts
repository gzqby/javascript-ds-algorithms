import Queue from '../../src/ts/queue';

describe('test queue', () => {
  let queue: Queue<any>;
  beforeEach(() => {
    queue = new Queue();
  });

  test('size', () => {
    expect(queue.size()).toEqual(0);

    queue.enQueue(1);
    expect(queue.size()).toEqual(1);

    queue.enQueue(1);
    queue.enQueue(1);
    expect(queue.size()).toEqual(3);

    queue.clear();
    expect(queue.size()).toEqual(0);
  });

  test('isEmpty', () => {
    expect(queue.isEmpty()).toEqual(true);

    queue.enQueue(() => {});
    expect(queue.isEmpty()).toEqual(false);

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('clear', () => {
    expect(queue.isEmpty()).toEqual(true);

    queue.enQueue(() => {});
    queue.enQueue(() => {});
    queue.enQueue(() => {});
    expect(queue.isEmpty()).toEqual(false);

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('enqueue', () => {
    queue.enQueue(1);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.size()).toEqual(1);

    queue.enQueue(1);
    queue.enQueue(3);
    expect(queue.size()).toEqual(3);
  });

  test('deQueue', () => {
    queue.enQueue(1);
    queue.enQueue(1);
    queue.enQueue(3);
    expect(queue.isEmpty()).toEqual(false);

    queue.deQueue();
    expect(queue.size()).toEqual(2);

    queue.deQueue();
    queue.deQueue();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('peek', () => {
    expect(queue.peek()).toEqual(undefined);

    queue.enQueue(3);
    queue.enQueue(4);
    expect(queue.peek()).toEqual(3);

    queue.deQueue();
    expect(queue.peek()).toEqual(4);
  });

  test('toString', () => {
    expect(queue.toString()).toEqual('');

    queue.enQueue('string');
    expect(queue.toString()).toEqual('string');

    queue.enQueue('1');
    expect(queue.toString()).toEqual('string,1');
  });
});
