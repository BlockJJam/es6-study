// js의 함수는 만능 슈퍼맨처럼 동작한다.
// 함수처럼 , 생성자 함수로도 사용(클래스)
// 하지만 이걸 위해서 불필요한 무거운 -> 프로토타입 객체(많은 데이터를 담고 있는 객체)가 생성됨
const dog = {
  name: 'dog',
  play: function () {
    // 이 방법은 좋지 않다. 왜? 객체안에 프로토타입이 또 만들어지기 때문
    console.log('논다멍');
  },
};
dog.play();
const obj = new dog.play(); // 함수는 일반생성자처럼도 사용이 가능
console.log(obj);

// ES6
const cat = {
  name: 'cat',
  play() {
    // 객체 메서드( 오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
// const obj2 = new cat.play(); // 생성자 함수로 ❌

const dogArrow = {
  name: 'dog',
  play: () => {
    // 이 방법은 좋지 않다. 왜? 객체안에 프로토타입이 또 만들어지기 때문
    console.log('논다멍');
  },
};

// const objArrow = new dogArrow.play();

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능( 무건운 프로토타입을 만들지 ❌
 * 3. 함수 자체 arguments
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *      - 함수에서 제일 근접한 상위 스코프의 this에 정적 바인딩됨 -> 즉 arrow함수로 만들어지는 순간 바인딩이 정해짐
 *
 */
console.clear();

const add = (a, b) => {
  console.log(arguments);
};
add(1, 2);
