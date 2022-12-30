console.log(globalThis) // node에서 사용하는 global 객체
console.log(Infinity);
console.log(NaN);
console.log(this); // node의 this = 현재 node에 있는 정보(현재 아무것도 없음) -> 브라우저에서는 Window가 전역 객체

eval('const num = 2; console.log(num)')
console.log(isFinite(2));
console.log(isFinite(Infinity))
log

