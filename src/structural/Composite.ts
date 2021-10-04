/**
 * 组合模式
 */

class Component {
  protected Children: Component[] = [];
  constructor(public id: number) {}
  add(v: Component) {
    this.Children.push(v);
    return this;
  }
  remove(v: Component) {
    this.Children.splice(
      this.Children.findIndex((item: Component) => item.id === v.id),
      1
    );
  }
  getChildren() {
    return this.Children;
  }
  operation() {
    console.log("我是根节点" + this.id);
    this.Children.forEach((item: Component) => item.operation());
  }
}
class Composite extends Component {
  operation() {
    console.log("我一般节点" + this.id);
    this.Children.forEach((item: Component) => item.operation());
  }
}
class Leaf extends Component {
  operation() {
    console.log("我叶节点" + this.id);
  }
}

export function test() {
  console.warn("composite pattern");
  const root = new Component(1)
    .add(new Composite(2).add(new Leaf(4)))
    .add(new Leaf(3));
  root.operation();
  console.log("---");
}
