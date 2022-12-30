// Symbol 
// 유일한 키를 생성할 수 있음

const map = new Map()
// const key1 = 'key'
// const key2 = 'key'

// 위가 되는 이유: key가 가리키는 값이 같기 때문에, 유일하지 않음
// 유일하게 만들기 위해서 Symbol을 사용

const key1 = Symbol('key')
const key2 = Symbol('key')
map.set(key1, 'test1')
console.log(map.get(key2)) // undefined
console.log(key1 === key2) // false


// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbor.for
// for => 전역 심볼 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key')
const k2 = Symbol.for('key')
console.log(k1 === k2); // true <- 두개가 같은 키를 갖는다는 의미

console.log(Symbol.keyFor(k1)); // 전역 심볼 레지스트리에 있어야만 가져올 수 있다

// Symbol을 활용하는 방법
// - Map을 이용할 때, 유일한 키를 만들 수 있고 키 관리를 잘할 수 있다
// - 보안을 좀 더 높일 수 있다
const obj = {[k1]: 'Hello', [Symbol('key')]: 1}
console.log(obj)
console.log(obj[k1]);
console.log(obj[Symbol('key')]); // Symbol('key')에는 접근이 안됨
