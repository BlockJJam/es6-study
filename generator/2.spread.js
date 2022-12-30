// Spread 연산자
// 모든 Iterable은 Spread 가능

function add(a,b, c){
    return a + b + c;
}

const nums = [1,2,3]
console.log(add(nums[0],nums[1], nums[2]))
console.log(add(...nums))

nums2 = [1,2]
console.log(add(...nums2))

function sum(first, second, ...nums){
    console.log(nums);
}


sum(1,2,3,4,4,10)

// Array Concat
const f1 = ['a','k']
const f2 = ['s','b']
let arr = f1.concat(f2)
console.log(arr);

arr = [...f1, 'test',...f2]
console.log(arr);

const elie = {
    name: 'elie',
    age: 20
}

const updated ={
    ...elie,
    job: 'teacher'
}

console.log(updated);
