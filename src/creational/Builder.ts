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

/**
 * 举个例子：创建一个3D地图
 */

class WorldMap {
  objects: string[] = [];
  setObject(object: string) {
    this.objects.push(object);
  }
  getObjects() {
    return this.objects;
  }
}

interface MapBulder {
  worlderMap: WorldMap;
  buildMap(object: string): void;
  getResult(): string[];
}

class ConcreteMapBuilder implements MapBulder {
  worlderMap: WorldMap = new WorldMap();
  buildMap(object: string) {
    this.worlderMap.setObject(object);
  }
  getResult() {
    return this.worlderMap.getObjects();
  }
}

class MapBuilderDirector {
  builder: MapBulder;
  constructor(builder: MapBulder) {
    this.builder = builder;
  }
  changeMapBulder(builder: MapBulder) {
    this.builder = builder;
  }
  construct() {
    this.builder.buildMap("sky");
    this.builder.buildMap("plane");
    this.builder.buildMap("background");
  }
}

export function test() {
  console.warn("Builder");
  let concreteBuilder = new ConcreteBuilder();
  let director = new Director(concreteBuilder);
  director.construct();
  console.log("product:", concreteBuilder.parts);
  console.log("example:");
  let concreteMapBuilder = new ConcreteMapBuilder();
  let mapDirector = new MapBuilderDirector(concreteMapBuilder);
  mapDirector.construct();
  console.log("worldMap:", concreteMapBuilder.getResult());
  console.log("---");
}
