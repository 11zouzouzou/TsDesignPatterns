/**
 * 解释器模式
 */

/**
 * 这个模式的重点在于具体解释规则的指定
 */
class Expression {
  interpret(props: string) {
    return props.length;
  }
}

/**
 * example:该模式暂不举例
 */

export function test() {
  console.warn("Interpreter pattern:");
  console.log("stringLength", new Expression().interpret("zouzouzou"));
  console.log("---");
}
