// 구조 분해 할당 destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const f = ['a','b','c','d']
console.log(f[0]);
const [first, second, ...others] = f
console.log(first);
console.log(second);
console.log(others);

const point = [1,2]
const [x,y,z=12] = point
console.log(x,y, z);

function createEmoji(){
    return ["text", '📄']
}

const[name,emoji] = createEmoji()
console.log(name, emoji)

const ellie = {username:'ellie', age: 20, job: 'sw enginner'}

function display({username, age, job}){
    console.log(username, age, job);
}

display(ellie)

const {username, age, job} = ellie;
console.log(username, age, job);