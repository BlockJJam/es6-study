// 부동소수점 계산이 비트와 64비트 셸에 의해 표현이 잘 안되기 때문에 조심해야 한다
const num = 0.1 + 0.2 - 0.2;
console.log(num)

function isEqual(origin, expected){
    return Math.abs(origin - expected) < Number.EPSILON
}

console.log(isEqual(1,1))
console.log(isEqual(0.1, 0.1))
console.log(isEqual(num, 0.1))
