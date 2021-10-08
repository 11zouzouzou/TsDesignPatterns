console.log("run typescript");
/**
 * creational
 */
import * as StaticFactoryMethod from "./creational/StaticFactoryMethod";
StaticFactoryMethod.test();
import * as FactoryMethod from "./creational/FactoryMethod";
FactoryMethod.test();
import * as AbstractFactory from "./creational/AbstractFactory";
AbstractFactory.test();
import * as Builder from "./creational/Builder";
Builder.test();
import * as Singleton from "./creational/Singleton";
Singleton.test();
/**
 * structural
 */
import * as Adapter from "./structural/Adapter";
Adapter.test();
import * as Bridge from "./structural/Bridge";
Bridge.test();
import * as Decorator from "./structural/Decorator";
Decorator.test();
import * as Facade from "./structural/Facade";
Facade.test();
import * as Flyweight from "./structural/Flyweight";
Flyweight.test();
import * as Proxy from "./structural/Proxy";
Proxy.test();
import * as Composite from "./structural/Composite";
Composite.test();
/**
 * behavioral
 */
import * as ChainOfResponsibility from "./behavioral/ChainOfResponsibility";
ChainOfResponsibility.test();
