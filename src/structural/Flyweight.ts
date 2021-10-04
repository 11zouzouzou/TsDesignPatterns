/**
 * 享元模式
 */

/**
 * 抽象享元类
 */
interface Flyweight {
  intrinsic: string; //内部状态
  extrinsic: string; //外部状态
  //业务操作
  operate(extrinsic: string): void;
  getIntrinsic(): string;
  setIntrinsic(intrinsic: string): void;
}
/**
 * 具体享元类
 */
class ConcreteFlyweight implements Flyweight {
  extrinsic: string;
  intrinsic: string;
  constructor(extrinsic: string) {
    this.extrinsic = extrinsic;
    this.intrinsic = "";
  }
  operate(extrinsic: string) {
    this.extrinsic;
  }
  getIntrinsic() {
    return this.intrinsic;
  }
  setIntrinsic(intrinsic: string) {
    this.intrinsic = intrinsic;
  }
}

/**
 * 享元工厂类
 */
class FlyweightFactory {
  private flyweights: { [key: string]: ConcreteFlyweight } = {}; //共享池
  add(extrinsic: any) {
    this.flyweights[JSON.stringify(extrinsic)] = new ConcreteFlyweight(extrinsic);
    return this;
  }
  //参数getExistOnly为true只获得当前已经存在的，否则返回为undefined,用于验证缓存是否被启用
  getFlyweight(extrinsic: any, getExistOnly: boolean = false) {
    const targetFlyWeight = this.flyweights[JSON.stringify(extrinsic)];
    if (targetFlyWeight || getExistOnly) {
      return targetFlyWeight;
    }
    const newFlyWeight = new ConcreteFlyweight(extrinsic);
    this.flyweights[JSON.stringify(extrinsic)] = newFlyWeight;
    return newFlyWeight;
  }
}

export function test() {
  console.log("flyweight:");
  const flyWeightPool = new FlyweightFactory();
  flyWeightPool.add({ zou: 1 });
  flyWeightPool.add({ zou: 2 });
  console.log(flyWeightPool.getFlyweight({ zou: 1 }, true));
  console.log(flyWeightPool.getFlyweight({ zou: 3 }, true));
  console.log(flyWeightPool.getFlyweight({ zou: 3 }, false));
  console.log("---");
}
