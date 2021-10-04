/**
 * 外观模式
 */

/**
 * 外观角色
 */
class Facade {
  constructor(private member1: SystemA, private member2: SystemB) {}
  operation() {
    return this.member1.operator1() + " " + this.member2.operator2();
  }
}

/**
 * 子系统
 */
class SystemA {
  operator1() {
    return "systemA work";
  }
}
class SystemB {
  operator2() {
    return "systemB work";
  }
}

export function test() {
  console.warn("Facade:");
  console.log(new Facade(new SystemA(), new SystemB()).operation());
  console.log("---");
}
