// this 바인딩
// java, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는 this는 항상 자신의 인스턴스 자체를 가리킴
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨
// 하지만, 자바스크립트에서는 누가 호출하느냐에 따라서 this가 결정됨
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이 이름을 출력한다냥: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지 이름을 출력한다멍: ${this.name}`);
  };
}

const cat1 = new Cat('naong');
const dog1 = new Dog('MMung');
cat1.printName();
dog1.printName();

dog1.printName = cat1.printName;
dog1.printName(); // 바인딩 주체: dog1
cat1.printName(); // 바인딩 주체: cat1

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백을 실행!');
  printName(); // 여기서는 cat1.printName 콜백을 하는 주체가 없다 -> 바인딩이 동적으로 변한다는 것을 알 수 있다
}

printOnMonitor(cat1.printName);
