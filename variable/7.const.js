// const는 재할당이 안되는 것이지, 변경이 안되는 것은 아님
const apple = {
    name:'apple',
    color:'orange',
    display:'🍏'
}

console.log(apple)

apple.name = 'green apple'
console.log(apple);

let a = b = 2;