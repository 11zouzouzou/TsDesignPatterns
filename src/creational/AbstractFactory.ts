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

/**
 * 举个例子：更换界面主题
 */

/**
 * 抽象播放器
 */
interface Player {
  color: string;
  click(): string;
}

/**
 * 具体播放器(normal)
 */
class NormalPlayer implements Player {
  color: string = "white";
  public click() {
    return "normalPlayer click";
  }
}

/**
 * 具体播放器(black)
 */
class BlackPlayer implements Player {
  color: string = "black";
  public click() {
    return "blackPlayer click";
  }
}

/**
 * 抽象导航
 */
interface Navigation {
  list: string;
  move(): string;
}

/**
 * 具体导航(Normal)
 */
class NormalNavigation implements Navigation {
  list: string = "normal list";
  public move() {
    return "normal navigation move";
  }
}

/**
 * 具体导航(Black)
 */
class BlackNavigation implements Navigation {
  list: string = "black list";
  public move() {
    return "black navigation move";
  }
}

/**
 * 主题抽象工厂
 */
interface ThemeFactory {
  createPlayer(): Player;
  createNavigation(): Navigation;
}

/**
 * 具体主题实现工厂(Normal)
 */
class NormalThemeFactory implements ThemeFactory {
  createPlayer() {
    return new NormalPlayer();
  }
  createNavigation() {
    return new NormalNavigation();
  }
}

/**
 * 具体主题实现工厂(Black)
 */
class BlackThemeFactory implements ThemeFactory {
  createPlayer() {
    return new BlackPlayer();
  }
  createNavigation() {
    return new BlackNavigation();
  }
}

/**
 * 具体主题管理器
 */
class ThemeManager {
  themeFactory: ThemeFactory;
  constructor(themeFactory: ThemeFactory) {
    this.themeFactory = themeFactory;
  }
  changeThemeFactory(themeFactory: ThemeFactory) {
    this.themeFactory = themeFactory;
  }
  buildThemeObject() {
    let player = this.themeFactory.createPlayer();
    let nav = this.themeFactory.createNavigation();
    return "themeManager:" + player.click() + " " + nav.move();
  }
}

export function test() {
  console.warn("abstract factory:");
  console.log(new ConcreteFactory1().createProductA().move());
  console.log(new ConcreteFactory1().createProductB().fly());
  console.log(new ConcreteFactory2().createProductA().move());
  console.log(new ConcreteFactory2().createProductB().fly());
  console.log("example:");
  let normalFatory = new NormalThemeFactory();
  let blackFactory = new BlackThemeFactory();
  let themeManager = new ThemeManager(normalFatory);
  console.log(themeManager.buildThemeObject());
  themeManager.changeThemeFactory(blackFactory);
  console.log(themeManager.buildThemeObject());
  console.log("---");
}
