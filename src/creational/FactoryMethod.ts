/**
 * 工厂方法
 */

/**
 * 抽象产品
 */
abstract class Product {
  abstract getName(): string;
}

/**
 * 具体产品
 */
class ConcreteProduct implements Product {
  getName() {
    return "ConcreteProductName";
  }
}

/**
 * 抽象工厂
 */
abstract class FactoryCreator {
  //可以提供传参，实现的类可根据传参指定想要创建的产品
  abstract factorMethod(type?: string): Product;
}

/**
 * 具体工厂
 */
class ConcreteFactoryCreator implements FactoryCreator {
  factorMethod(type?: string) {
    return new ConcreteProduct();
  }
}

export function test() {
  console.warn("factory method");
  console.log(
    "ConcreteFactoryCreator:",
    new ConcreteFactoryCreator().factorMethod().getName()
  );
  console.log("---");
}
