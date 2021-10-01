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
  /**
   * @param proname 创建产品name
   */
  static createProduct(proname: string) {
    if ("A" == proname) {
      return new ConcreteProductA();
    } else if ("B" == proname) {
      return new ConcreteProductB();
    }
    return null;
  }
}

/**
 * 原型实现
*/
const Prototype = {
  name: "zouzouzou",
  getName: function () {
    console.log("name is :" + this.name);
    return this.name;
  },
};

const PrototypeCopy = Object.create(Prototype, {
  name: {
    value: "zou1",
  },
});

/**
 * 举个3D图形抽象的例子
 */

/**
 * 两种场景类型：服饰场景与建筑场景
 */
enum EScene {
  cloth = "cloth",
  building = "building",
}

/**
 * 抽象3D场景父类
 */
abstract class Scene {
  abstract sceneType: EScene;
}

class ClothScene implements Scene {
  sceneType = EScene.cloth;
}

class BuildingScene implements Scene {
  sceneType = EScene.building;
}

function CreateScene(sceneType: EScene) {
  switch (sceneType) {
    case EScene.building:
      return new BuildingScene();
    case EScene.cloth:
      return new ClothScene();
    default:
      return;
  }
}

export function test() {
  console.warn("static factory method");
  console.log(Factory.createProduct("A"));
  console.log(Factory.createProduct("B"));
  console.log(CreateScene(EScene.cloth));
  console.log(CreateScene(EScene.building));
  console.log('prototype:',Prototype.getName());
  console.log('prototype copy:',PrototypeCopy.getName());
  console.log('---');
}
