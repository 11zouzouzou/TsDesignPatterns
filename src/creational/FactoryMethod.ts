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

/**
 * 举个实际例子：任何系统都有可能用到的日志记录器
 */
abstract class LogSystem<T> {
  abstract logs: T[];
  abstract writeLog(log: T): void;
}

class ProgressLogSystem implements LogSystem<number> {
  logs: number[] = [];
  writeLog(log: number) {
    this.logs.push(log);
    return;
  }
}

class FileLogSystem implements LogSystem<string> {
  logs: string[] = [];
  writeLog(log: string) {
    this.logs.push(log);
    return;
  }
}

abstract class LogSystemFactory {
  abstract createLogSystem(): LogSystem<unknown>;
}

class FileLogSystemFactory implements LogSystemFactory {
  createLogSystem() {
    return new FileLogSystem();
  }
}

class ProgressLogSystemFactory implements LogSystemFactory {
  createLogSystem() {
    return new ProgressLogSystem();
  }
}

export function test() {
  console.warn("factory method");
  console.log(
    "ConcreteFactoryCreator:",
    new ConcreteFactoryCreator().factorMethod().getName()
  );
  const progressLogSystemFactory = new ProgressLogSystemFactory();
  const progressLogSystem = progressLogSystemFactory.createLogSystem();
  progressLogSystem.writeLog(9);
  const fileLogSystemFactory = new FileLogSystemFactory();
  const fileLogSystem = fileLogSystemFactory.createLogSystem();
  fileLogSystem.writeLog("file log system");
  console.log("logSystems:", progressLogSystem.logs, fileLogSystem.logs);
  console.log("---");
}
