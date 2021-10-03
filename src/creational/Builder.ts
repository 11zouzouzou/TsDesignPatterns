/**
 * 建造者模式
 */

/**
 * 抽象建造者
 */
interface Builder {
  //Product
  parts: number[];
  //传入建造哪个部分
  buildPart: (part: number) => void;
  getResult(): number[];
}

/**
 * 具体建造者
 */
class ConcreteBuilder implements Builder {
  parts: number[] = [];
  buildPart(part: number) {
    this.parts.push(part);
  }
  getResult() {
    return this.parts;
  }
}
/**
 * 指挥者
 */
class Director {
  constructor(public builder: Builder) {}
  construct() {
    this.builder.buildPart(1);
    this.builder.buildPart(4);
  }
}

export function test() {
  console.warn("Builder");
  let concreteBuilder = new ConcreteBuilder();
  let director = new Director(concreteBuilder);
  director.construct();
  console.log("product:", concreteBuilder.parts);
  console.log("---");
}
