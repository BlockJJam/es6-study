let apple = {
    name:'apple',
    'hell-bye1':'wow',
    ['hell-bye2']:'wow2'
}

console.log(apple);
delete apple['hell-bye1']
console.log(apple);
delete apple // 객체 자체를 지우진 않음
console.log(apple);
