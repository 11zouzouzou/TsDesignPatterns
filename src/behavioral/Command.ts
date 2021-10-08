/**
 * 命令模式
 */

/**
 * 接收者执行与请求相关的操作，它具体实现对请求的业务处理
 */
class Receiver {
  constructor(private name = "") {}
  action() {
    console.log("name:" + this.name);
  }
}
/**
 * 抽象命令类中声明了用于执行请求的 execute()等方法，通过这些方法可以调用请求接收者的相关操作
 */
class Command {
  constructor(protected receiver: Receiver) {
    console.log(receiver);
  }
  execute() {
    console.log("default execute");
  }
}

/**
 * 具体命令类是抽象命令类的子类，实现了在抽象命令类中声明的方法，它对应具体的接收者对象，将接收者对象的动作绑定其中
 */
class ConcreteCommand extends Command {
  execute() {
    console.log("concrete execute");
    this.receiver.action();
  }
}

/**
 * 调用者即请求的发送者，又称为请求者，它通过命令对象来执行请求；
 */
class Invoker {
  private defaultStep = () => {
    console.log("default step");
  };
  onStep1: () => void = this.defaultStep;
  onStep2: () => void = this.defaultStep;
  setStep1(c: Command) {
    this.onStep1 = c.execute.bind(c); //注意这里绑定this，不然执行其中的this指向invoker
  }
  setStep2(c: Command) {
    this.onStep2 = c.execute.bind(c);
  }
}

/**
 * example add TODO
 */

export function test() {
  console.warn("command pattern:");
  const invoker = new Invoker();
  invoker.setStep1(new ConcreteCommand(new Receiver("zouzouzou")));
  invoker.onStep1();
  invoker.onStep2();
  console.log("---");
}
