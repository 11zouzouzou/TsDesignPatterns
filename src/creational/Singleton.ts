/**
 * 单例模式
 */

/**
 * 单例构造
 */
class Singleton {
  private static _instance: Singleton;
  public static getInstance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}
/**
 * 例子：比如：一个具有自动编号主键的表可以有多个用户同时使用，但数据库中只能有一个地方分配下一个主键编号，否则会出现主键重复，因此该主键编号生成器必须具备唯一性，可以通过单例模式来实现。
 */
export function test() {
  console.warn("singleton");
  let s1 = Singleton.getInstance();
  let s2 = Singleton.getInstance();
  console.log("is sinleton?:", s1 === s2);
  console.log("---");
}
