/**
 * 抽象工厂(Abstract Factroy)
 */

/**
 * 抽象产品A
 */
interface AbstractProductA {
  move(): string;
}

/**
 * 具体产品A1
 */
class ConcreteProductA1 implements AbstractProductA {
  public move(): string {
    return "the product A1 move";
  }
}
/**
 * 具体产品A2
 */
class ConcreteProductA2 implements AbstractProductA {
  public move(): string {
    return "the product A2 move";
  }
}
/**
 * 抽象产品B
 */
interface AbstractProductB {
  fly(): string;
}
/**
 * 具体产品B1
 */
class ConcreteProductB1 implements AbstractProductB {
  public fly(): string {
    return "the product B1 fly";
  }
}
/**
 * 具体产品B2
 */
class ConcreteProductB2 implements AbstractProductB {
  public fly(): string {
    return "the product B2 fly";
  }
}
/**
 * 抽象工厂
 */
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
/**
 * 具体生成不同产品等级结构工厂1
 */
class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
/**
 * 具体生成不同产品等级结构工厂2
 */
class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

export function test() {
  console.warn("abstract factory:");
  console.log(new ConcreteFactory1().createProductA().move());
  console.log("---");
}
