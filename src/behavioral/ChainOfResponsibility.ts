/**
 * 责任链模式
 */

/**
 * 处理抽象类
 */
class Handler {
  private nextHandler: Handler | undefined = undefined;
  setNext(h: Handler) {
    this.nextHandler = h;
    return h;
  }
  //默认处理，如果有下一个则交给下一个处理，否则返回'remnant'，可以通过是不是null来判断是不是最后也没处理
  handle(request: number): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return "remnant";
  }
}

/**
 * 具体处理请求类
*/
class ConcreteHandler1 extends Handler {
  handle(request: number) {
    if (request === 1) {
      return "done by handle1";
    }
    return super.handle(request);
  }
}
class ConcreteHandler2 extends Handler {
  handle(request: number) {
    if (request === 2) {
      return "done by handle2";
    }
    return super.handle(request);
  }
}

/**
 * example TODO
 */

export function test() {
  console.warn("chain of responsibility:");
  const handler1 = new ConcreteHandler1();
  const handler2 = new ConcreteHandler2();
  handler1.setNext(handler2);
  console.log(handler1.handle(1));
  console.log(handler2.handle(2));
  console.log(handler2.handle(3));
  console.log("---");
}
