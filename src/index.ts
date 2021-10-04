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
