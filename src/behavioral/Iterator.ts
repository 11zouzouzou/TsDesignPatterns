/**
 * 迭代器模式
 */

/**
 * 抽象迭代器
 */
interface IteratorInterface<T> {
  first(): T;
  next(): T;
  isDone: boolean;
  curItem: T;
}

/**
 * 抽象要迭代的对象
 */
interface Aggregator {
  createIterator(): IteratorInterface<string>;
}

/**
 * 具体要迭代的对象
 */
class ConcreteAggregator implements Aggregator {
  items: string[] = [];
  addItem(i: string) {
    this.items.push(i);
    return this;
  }
  createIterator() {
    return new ConcreteIterator(this);
  }
}

/**
 * 具体迭代器对象
 */
class ConcreteIterator implements IteratorInterface<string> {
  location: number = 0;
  constructor(private collection: ConcreteAggregator) {}
  first() {
    return this.collection.items[0];
  }
  next() {
    const item = this.collection.items[this.location];
    this.location += 1;
    return item;
  }
  get isDone() {
    return this.location >= this.collection.items.length;
  }
  get curItem() {
    return this.collection.items[this.location];
  }
}

export function test() {
  console.warn("Iterator pattern:");
  const aggregator = new ConcreteAggregator();
  aggregator.addItem("first").addItem("second").addItem("third");
  const iterator = aggregator.createIterator();
  while (!iterator.isDone) {
    console.log(iterator.next());
  }
  console.log("---");
}
