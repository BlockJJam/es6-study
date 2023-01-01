// var 특징(똥)
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕 옴
// -> 코드 가독성과 유지보수성에 좋지 않음

// 1. 변수 선언하는 키워드 자체가 없이 선언 & 할당 가능
// - 선언인지, 재할당인지 구분이 어려움
something = 'ddong';
console.log(something);

// 2. 중복 선언이 가능함
var poo = 'ddong';
var poo = 'doong';
console.log(poo);

var apple = 'apple';
{
  var apple = '🍎';
}
console.log(apple); // 스코프를 생각해보면, 블록 레벨에서 스코프 적용이 안됨❌

// 4. 함수 레벨 스코프만 지원됨
function example() {
  var dog = 'dog';
}

console.log(dog);
