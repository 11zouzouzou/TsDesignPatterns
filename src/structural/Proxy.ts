/**
 * 代理模式
 */

/**
 * 抽象主题
 */
interface Subject {
  request(): void;
}
/**
 * 真实主题
 */
class RealObject implements Subject {
  request() {
    return "real";
  }
}
/**
 * 代理主题
 */
class ProxySubject implements Subject {
  constructor(private realObject: Subject) {}
  request() {
    return "proxy:" + this.realObject.request();
  }
}

/**
 * 举个例子：图片加载代理
 */

interface Image {
  display(): void;
}

class RealImage implements Image {
  filename: string;
  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }
  display() {
    console.log("displaying:" + this.filename);
  }
  private loadFromDisk() {
    console.log("loading from disk:" + this.filename);
  }
}

class ProxyImage implements Image {
  filename: string;
  realImage: Image | null = null;
  constructor(filename: string) {
    this.filename = filename;
  }
  display() {
    if (this.realImage == null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}
export function test() {
  console.warn("proxy pattern:");
  let real = new RealObject();
  let proxy = new ProxySubject(real);
  console.log(proxy.request());
  console.log("example:");
  let proxyImage = new ProxyImage("zouzouzou.jpg");
  console.log("disk load");
  proxyImage.display();
  console.log("not disk load");
  proxyImage.display();
  console.log("---");
}
