import StackArray from '../../src/ts/stackArray';

describe('StackArray', () => {
  let stack: StackArray<number>;

  beforeEach(() => {
    stack = new StackArray<number>();
  });

  test('starts empty', () => {
    expect(stack.size()).toEqual(0);
    expect(stack.isEmpty()).toEqual(true);
  });

  test('pushes elements', () => {
    stack.push(1);
    expect(stack.size()).toEqual(1);
    stack.push(2);
    expect(stack.size()).toEqual(2);
    stack.push(3);
    expect(stack.size()).toEqual(3);

    expect(stack.isEmpty()).toEqual(false);
  });

  test('pops elements', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });

  test('implements LIFO logic', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });

  test('allows to peek at the top element in he stack wtesthout popping test', () => {
    expect(stack.peek()).toEqual(undefined);

    stack.push(1);
    expect(stack.peek()).toEqual(1);

    stack.push(2);
    expect(stack.peek()).toEqual(2);

    stack.pop();
    expect(stack.peek()).toEqual(1);
  });

  test('returns the correct size()', () => {
    expect(stack.size()).toEqual(0);
    stack.push(1);
    expect(stack.size()).toEqual(1);
    stack.push(2);
    expect(stack.size()).toEqual(2);
    stack.push(3);
    expect(stack.size()).toEqual(3);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.size()).toEqual(2);
    stack.pop();
    expect(stack.size()).toEqual(1);
    stack.pop();
    expect(stack.size()).toEqual(0);
    stack.pop();
    expect(stack.size()).toEqual(0);
  });

  test('returns if test is empty', () => {
    expect(stack.isEmpty()).toEqual(true);
    stack.push(1);
    expect(stack.isEmpty()).toEqual(false);
    stack.push(2);
    expect(stack.isEmpty()).toEqual(false);
    stack.push(3);
    expect(stack.isEmpty()).toEqual(false);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('clears the stack', () => {
    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('returns an Array', () => {
    let stackArray = stack.toArray();
    expect(stackArray.length).toEqual(0);

    stack.push(1);
    stack.push(2);

    stackArray = stack.toArray();
    expect(stackArray.length).toEqual(2);
    expect(stackArray).toEqual(expect.arrayContaining([1, 2]));
  });

  test('returns toString primtestive types', () => {
    expect(stack.toString()).toEqual('');

    stack.push(1);
    expect(stack.toString()).toEqual('1');

    stack.push(2);
    expect(stack.toString()).toEqual('1,2');

    stack.clear();
    expect(stack.toString()).toEqual('');

    const stackString = new StackArray<string>();
    stackString.push('el1');
    expect(stackString.toString()).toEqual('el1');

    stackString.push('el2');
    expect(stackString.toString()).toEqual('el1,el2');
  });

  test('returns toString objects', () => {

    class MyObj {
      constructor(public el1: any, public el2: any) { }
      toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
      }
    }
    const stackMyObj = new StackArray<MyObj>();
    expect(stackMyObj.toString()).toEqual('');

    stackMyObj.push(new MyObj(1, 2));
    expect(stackMyObj.toString()).toEqual('1|2');

    stackMyObj.push(new MyObj(3, 4));
    expect(stackMyObj.toString()).toEqual('1|2,3|4');
  });
});
