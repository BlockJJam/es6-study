// react와 같은 프레임워크 사용시 기본적으로 엄격모드 적용
'use strict';

// var x = 1;
// delete x;

function add(x) {
  var a = 2;
  var b = a + x;
  console.log(this);
}
add(1);

const array = [1, 2, 3];
for (let num of array) {
  console.log(num);
}
