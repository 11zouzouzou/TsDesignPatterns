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

/**
 * 举个例子：公司员工
 */

class Employee {
  name: string;
  dept: string;
  salary: number;
  subordinates: Employee[];
  constructor(name: string, dept: string, salary: number) {
    this.name = name;
    this.dept = dept;
    this.salary = salary;
    this.subordinates = [];
  }
  add(e: Employee) {
    this.subordinates.push(e);
  }
  getSubordinates(): Employee[] {
    return this.subordinates;
  }
}

export function test() {
  console.warn("composite pattern");
  const root = new Component(1)
    .add(new Composite(2).add(new Leaf(4)))
    .add(new Leaf(3));
  root.operation();
  console.log("example:");
  const CEO = new Employee("John", "CEO", 30000);
  const headSales = new Employee("Robert", "Head Sales", 20000);
  const headMarketing = new Employee("Michel", "Head Marketing", 20000);
  const clerk1 = new Employee("Laura", "Marketing", 10000);
  const clerk2 = new Employee("Bob", "Marketing", 10000);

  const salesExecutive1 = new Employee("Richard", "Sales", 10000);
  const salesExecutive2 = new Employee("Rob", "Sales", 10000);

  CEO.add(headSales);
  CEO.add(headMarketing);

  headSales.add(salesExecutive1);
  headSales.add(salesExecutive2);

  headMarketing.add(clerk1);
  headMarketing.add(clerk2);
  //打印该组织的所有员工
  console.log("打印所有员工");
  console.log(CEO.name);
  const arr = CEO.getSubordinates();
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
    const next = arr[i].getSubordinates();
    for (let i = 0; i < next.length; i++) {
      console.log(next[i].name);
    }
  }
  console.log("---");
}
