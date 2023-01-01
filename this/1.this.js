/**
 * 글로벌 컨텍스트의 this
 * - 브라우저: 글로벌 객체는 Window구나 알 수 있다.
 * - 노드: commonjs라는 내장되어있는 모듈 export 시스템을 쓴다.
 */

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
console.clear();

/**
 * 함수 내부의 this -> globalThis 호출
 *  -> 'use strict'에서는 undefined
 */
function fun() {
  console.log(this);
}
fun();

/**
 * 생성자 함수 또는 클래스의 this -> 앞으로 생성될 인스턴스 자체를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat('naong');
const cat2 = new Cat('NNNAONG');
cat1.printName();
cat2.printName();

// this 바인딩
// java, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는 this는 항상 자신의 인스턴스 자체를 가리킴
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨
// 하지만, 자바스크립트에서는 누가 호출하느냐에 따라서 this가 결정됨
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
