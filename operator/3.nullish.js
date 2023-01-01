// Nullish Coalescing Operator
// ES11(ESMA2020)

// || falshy한 경우 모두가 설정됨

let num = 0;
console.log(num || '-1') // 0은 falshy인 경우
// num 이라는 값이 없을 때만 -1을 할당하고 싶다
console.log(num ?? '-1') // 물음표(?)가 2개를 사용하면, null인지 혹은 undefined인지 경우만 체크한다.
