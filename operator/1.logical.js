let obj1 = {name:"112"}
let obj2 = {name: "1212", test: 12333}
let obj3 = false

// 단축 평가, obj1이 true니깐, obj2를 할당 -> 변수 할당할 때만 
// &&는 and연산으로 앞의 조건만 평가하다가 true이면 뒤로 쭉 보내고, false이거나 마지막을 할당하면 된다.
let result = obj1 && obj2 && obj3
console.log(result);
result = obj3 && obj2  // 앞
console.log(result);

// ||는 앞의 결과만 true면 된다.
result = obj1 || obj2
console.log(result);

// 단축 평가 활용 예
function changeOwner(animal){
    if(!animal.test){
        throw new Error('테스트 없음')
    }
    animal.test = 'test'
}

function makeNewOwner(animal){
    if(animal.test){
        throw new Error("테스트 있음")
    }
    animal.test = 'make new'
}

// obj1.test && changeOwner(obj1)
// console.log(obj1);
// obj2.test && changeOwner(obj2)
// console.log(obj2);

// obj1.test && makeNewOwner(obj1);
// obj2.test && makeNewOwner(obj2);

// 단축 평가로 undefined경우를 확인할 때
let item;
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined설정
// || 값이 falshy한 경우 설정(할당): 0 ,-0, null, undefined, '' 
function print(message){
    const text = message || 'hello'
    console.log(text)
}

print()
