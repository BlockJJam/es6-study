// 일급객체: 함수가 일반 객체처럼 모든 연산이 가능한 것
//  함수의 매개변수로 전달
//  함수의 반환값
//  함수 자체를 변수에 할당
//  동일 비교 대상

// 고차함수
// 인자로 함수를 받거나
// 함수를 반환하는 함수
const add = (a,b) => a + b;
const multiply = (a,b) => a * b;

function calc(a,b, action){
    let result = action(a,b);
    console.log(result);
    
    return result;
}


calc(2,4, add)
calc(2,4, multiply)