// 프로토타입 베이스 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji); // 부모에 생성자를 호출
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {};
const dog1 = new Dog('멍멍', '🐶', '엘리');
dog1.printName();
dog1.play();

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자! ..🐰..');
};

const tiger = new Tiger('어흥', '🐯');
tiger.hunt();
tiger.printName();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);
