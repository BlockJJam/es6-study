// 오브젝트는 단 하나의 prototype을 가리킬 수 있다
// 하지만, 여러개의 함수들을 상속받고 싶다!
// Mixin을 이용하자

class Animal {}

const play = {
  play: function () {
    console.log(`${this.name} 놀아요`);
  },
};
const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥');
tiger.play();
tiger.sleep();
