/**
 * 代理模式
 */

/**
 * 抽象主题
 */
interface Subject {
  request(): string;
}
/**
 * 真实主题
 */
class RealObject implements Subject {
  request() {
    return "real";
  }
}
/**
 * 代理主题
 */
class ProxySubject implements Subject {
  constructor(private realObject: Subject) {}
  request() {
    return "proxy:" + this.realObject.request();
  }
}
export function test() {
  console.warn("proxy pattern:");
  let real = new RealObject();
  let proxy = new ProxySubject(real);
  console.log(proxy.request());
  console.log("---");
}
