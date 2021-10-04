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
    this.flyweights[JSON.stringify(extrinsic)] = new ConcreteFlyweight(
      extrinsic
    );
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

/**
 * 举个例子：五子棋小游戏案例
 */

class Chess {
  x: number = 0;
  y: number = 0;
  play(x: number, y: number) {}
}

class WhiteChess extends Chess {
  play(x: number, y: number) {
    this.x = x;
    this.y = y;
    return "white:" + "x:" + x + "y:" + y;
  }
}

class BlackChess extends Chess {
  play(x: number, y: number) {
    this.x = x;
    this.y = y;
    return "black:" + "x:" + x + "y:" + y;
  }
}

class ChessFactory {
  private static whiteChess: Chess;
  private static blackChess: Chess;
  public static getChess(key: number): Chess {
    if (key == 0) {
      if (ChessFactory.whiteChess == null) {
        console.log("=====创建白棋对象======");
        ChessFactory.whiteChess = new WhiteChess();
      }
      return ChessFactory.whiteChess;
    } else {
      if (ChessFactory.blackChess == null) {
        console.log("=====创建黑棋对象======");
        ChessFactory.blackChess = new BlackChess();
      }
      return ChessFactory.blackChess;
    }
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
  console.log("example:");
  for (let i = 0; i < 10; i++) {
    let c = ChessFactory.getChess(i % 2);
    console.log(c.play(i, Math.round(Math.random() * 20)));
  }

  console.log("---");
}
