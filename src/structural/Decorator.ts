/**
 * 装饰器模式
 */

/**
 * 抽象构件:定义了对象的接口，可以给这些对象动态增加职责（方法）
 */
interface Component {
  operation(): string;
}
/**
 * 具体构件:定义了具体的构件对象，实现了在抽象构件中声明的方法，装饰器可以给它增加额外的职责（方法）
 */
class ConcreteComponentA implements Component {
  operation() {
    return "ConcreteComponentA";
  }
}

/**
 * 抽象装饰类:抽象构件类的子类，用于给具体构件增加职责，但是具体职责在其子类中实现
 */
class Decorator implements Component {
  constructor(protected component: Component) {}
  operation() {
    return this.component.operation();
  }
}

/**
 * 具体装饰类:抽象装饰类的子类，负责向构件添加新的职责
 */
class ConcreteDecoretor extends Decorator {
  operation() {
    return "concrete" + super.operation();
  }
  addBehavior() {
    return "addBehavior";
  }
}

/**
 * 举个例子：绘制几何图形
 */
interface Shape {
  draw(): string;
}

class RectAngle implements Shape {
  draw() {
    return "rectAngle";
  }
}
class Circle implements Shape {
  draw() {
    return "Circle";
  }
}

class ShapeDecorator implements Shape {
  constructor(protected shape: Shape) {}
  draw() {
    return this.shape.draw();
  }
}

class RedShapeDecorator extends ShapeDecorator {
  setRedBorder() {
    return "redBorder";
  }
}

export function test() {
  console.warn("Decorator:");
  let concreteComp = new ConcreteComponentA();
  let concreteDecoretor = new ConcreteDecoretor(concreteComp);
  console.log(concreteDecoretor.operation(), concreteDecoretor.addBehavior());
  console.log("example:");
  let shape = new RectAngle();
  let redShapeDecorator = new RedShapeDecorator(shape);
  console.log(redShapeDecorator.draw(), redShapeDecorator.setRedBorder());
  console.log("---");
}
