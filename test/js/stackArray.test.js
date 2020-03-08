import StackArray from '../../src/js/stackArray';

describe('StackArray test', () => {
  let stackArray;

  beforeEach(() => {
    stackArray = new StackArray();
  });

  test('push', () => {
    expect(stackArray.isEmpty()).toEqual(true);
    stackArray.push(1);
    expect(stackArray.size).toEqual(1);
    stackArray.push(2);
    expect(stackArray.peek()).toEqual(2);
  });

  test('pop', () => {
    stackArray.push(1);
    stackArray.push(2);
    expect(stackArray.pop()).toEqual(2);
    expect(stackArray.size).toEqual(1);
    stackArray.pop();
    expect(stackArray.isEmpty()).toEqual(true);
  });

  test('isEmpty', () => {
    expect(stackArray.isEmpty()).toEqual(true);
    stackArray.push(1);
    stackArray.push(2);
    expect(stackArray.isEmpty()).toEqual(false);
  });

  test('peek', () => {
    stackArray.push(1);
    expect(stackArray.peek()).toEqual(1);
    stackArray.push(2);
    expect(stackArray.peek()).toEqual(2);
  });

  test('size', () => {
    expect(stackArray.size).toEqual(0);
    stackArray.push(1);
    stackArray.push(2);
    expect(stackArray.size).toEqual(2);
  });

  test('toString', () => {
    expect(stackArray.toString()).toEqual('');
    stackArray.push(1);
    stackArray.push(2);
    expect(stackArray.toString()).toEqual('1,2');
  });

  test('toArray', () => {
    expect(stackArray.toArray().length).toEqual(0);
    stackArray.push(1);
    stackArray.push(2);
    expect(stackArray.toArray()).toEqual(expect.arrayContaining([1, 2]));
  });

  test('clear', () => {
    expect(stackArray.toArray().length).toEqual(0);
    stackArray.push(1);
    stackArray.push(2);
    expect(stackArray.isEmpty()).toEqual(false);
    stackArray.clear();
    expect(stackArray.isEmpty()).toEqual(true);
  });
});
