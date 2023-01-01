// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐕‍🦺' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  // 인스턴스 레벨의 함수 => 근데 인스턴스 만들 때마다 생성하면 메모리 낭비 아닌가? => 프로토타입 함수로 막아야 함
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}

// 프로토타입의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('뭉치', '🐶');
dog1.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다(섀도잉)

dog1.printName = function () {
  console.log('하이요!');
};
dog1.printName();

// 정적레벨
Dog.hello = () => {
  console.log('Hello!');
};

// dog1.hello()
Dog.hello();
Dog.MAX_LEVEL = 20;
dog1.MAX_LEVEL = 10;
console.log(dog1.MAX_LEVEL, Dog.MAX_LEVEL);
