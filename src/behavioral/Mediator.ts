/**
 * 中介者模式
 */

/**
 * 抽象中介者
 */
interface Mediator {
  notify(receiver: string): void;
}

/**
 * 抽象同事类
 */
class Colleague {
  mediator: Mediator | null = null;
  setModidator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

class ConcreteColleague1 extends Colleague {
  toDo() {
    console.log("colleague one");
  }
  toCall(listener: string) {
    console.log("one call");
    this.mediator?.notify(listener);
  }
}

class ConcreteColleague2 extends Colleague {
  toDo() {
    console.log("colleague two");
  }
  toCall(listener: string) {
    console.log("two call");
    this.mediator?.notify(listener);
  }
}

class ConcreteMediator implements Mediator {
  state: { [id in string]: Colleague } = {};
  constructor(private c1: Colleague, private c2: Colleague) {
    this.state["c1"] = c1;
    this.state["c2"] = c2;
    c1.setModidator(this);
    c2.setModidator(this);
  }
  notify(receiver: string) {
    (this.state[receiver] as any)?.toDo();
  }
}

export function test() {
  console.warn("mediator pattern:");
  const c1 = new ConcreteColleague1();
  const c2 = new ConcreteColleague2();
  const m = new ConcreteMediator(c1, c2);
  c1.toCall("c2");
  c2.toCall("c1");
  console.log("---");
}
