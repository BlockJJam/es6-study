// 동결! Object.freeze
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
// 수정 ❌, 추가❌, 삭제❌, 속성 재정의
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);

dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

ellie.name = '엘리엘리얌'; //shallow 복사임
console.log(dog);

// 밀봉! Object.seal -> 수정 ✅, 추가❌, 삭제❌, 속성 재정의
const cat = {};
Object.assign(cat, dog);
console.log(cat);
const cat2 = { ...dog };
console.log(cat2);

Object.seal(cat);
cat.name = '냐옹';
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가만 안됨
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
