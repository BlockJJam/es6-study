function Cat(name) {
  this.name = name;
  //   this.printName = function () {
  //     console.log(`고양이 이름을 출력한다냥: ${this.name}`);
  //   };
  // 2. arrow 함수를사용: arrow 함수는 렉시컬환경에서의 this를 기억한다.
  //    화살표함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이 이름을 출력한다냥: ${this.name}`);
  };

  // 1. bind함수를 이용해서 수동적으로 바인딩 해주기
  //   this.printName = this.printName.bind(this);
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
