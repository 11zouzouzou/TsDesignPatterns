/**
 * 适配器模式
 */

/**
 * 目标抽象类定义客户要用的特定领域的接口
 */
interface Target {
  request: () => void;
}

/**
 * 适配者类是被适配的角色，它定义了一个已经存在的接口，这个接口需要适配
 */
class Adaptee {
  specialRequest() {
    return "special request";
  }
}
/**
 * 适配器类可以调用另一个接口，作为一个转换器，对适配者和抽象目标类进行适配
 */
class Adapter implements Target {
  instance: Adaptee;
  constructor(adaptee: Adaptee) {
    this.instance = adaptee;
  }
  request() {
    return this.instance.specialRequest();
  }
}

/**
 * 在客户类中针对目标抽象类进行编程，调用在目标抽象类中定义的业务方法
 */
class Client {
  click(adapter: Adapter) {
    return adapter.request();
  }
}
/**
 * 举个简单的例子：网线适配
 */
interface NetToUsb {
  //作用：处理请求，网线=>usb
  handleRequest(): string;
}

class NetAdaptee {
  request() {
    return "连网线,已可上网";
  }
}

class NetAdapter implements NetToUsb {
  private instance: NetAdaptee;
  constructor(instance: NetAdaptee) {
    this.instance = instance;
  }
  handleRequest() {
    return this.instance.request();
  }
}

class Computer {
  net(netAdapter: NetAdapter) {
    return netAdapter.handleRequest();
  }
}

export function test() {
  console.warn("adapter pattern");
  let client = new Client();
  let adaptee = new Adaptee();
  let adapter = new Adapter(adaptee);
  console.log(client.click(adapter));
  console.log("example:");
  let netAdaptee = new NetAdaptee();
  let netAdapter = new NetAdapter(netAdaptee);
  let computer = new Computer();
  console.log("computer:", computer.net(netAdapter));
  console.log("---");
}
