/**
 * 桥接模式
 */

/**
 *  实现类接口定义了实现类的接口，实现类接口仅提供基本操作，而抽象类定义的接口可能会做更多更复杂的操作
 */
interface Implementor {
  operationImplementation(): string;
}

/**
 * 具体实现类实现了实现类接口并且具体实现它，在不同的具体实现类中提供基本操作的不同实现，在程序运行时，具体实现类对象将替换其父类对象，提供给客户端具体的业务操作方法。
 */
class ConcreteImplementor implements Implementor {
  operationImplementation() {
    return "ConcreteImplementor";
  }
}

/**
 * 抽象类中定义了一个实现类接口类型的对象并可以维护该对象
 */
class Abstraction {
  protected implementation: Implementor;

  constructor(implementation: Implementor) {
    this.implementation = implementation;
  }
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return "default:" + result;
  }
}

/**
 * 扩充抽象类扩充由抽象类定义的接口，它实现了在抽象类中定义的抽象业务方法，在扩充抽象类中可以调用在实现类接口中定义的业务方法；
 */
class RefinedAbstraction extends Abstraction {
  operation() {
    const result = this.implementation.operationImplementation();
    return "refined:" + result;
  }
}

export function test() {
  console.log("Bridge:");
  let concreteImplementor = new ConcreteImplementor();
  let abstraction = new Abstraction(concreteImplementor);
  let refinedAbstraction = new RefinedAbstraction(concreteImplementor);
  console.log(abstraction.operation());
  console.log(refinedAbstraction.operation());
  console.log("---");
}
