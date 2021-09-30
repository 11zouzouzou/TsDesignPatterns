/**
 * 静态工厂方法(原型)(Static Factory Method)
 * ```
 * ```
 */

/**
 * 抽象父类
 */
abstract class Product {
  abstract name: string;
}

/**
 * 继承父类 实例化子类A
 */
class ConcreteProductA implements Product {
  name: string;
  constructor() {
    this.name = "A";
  }
}
/**
 * 继承父类 实例化子类B
 */
class ConcreteProductB implements Product {
  name: string;
  constructor() {
    this.name = "B";
  }
}
/**
 * 静态工厂方法
 */
class Factory {
  static createProduct(proname: string) {
    if ("A" == proname) {
      return new ConcreteProductA();
    } else if ("B" == proname) {
      return new ConcreteProductB();
    }
    return null;
  }
}

export function init() {
  console.warn("static factory method");
  console.log(Factory.createProduct("A"));
  console.log(Factory.createProduct("B"));
}
