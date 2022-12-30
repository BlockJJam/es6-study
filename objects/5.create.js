// const apple = {
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name}: 🍏`)
//     }
// }


// const orange = {
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}: 🍊`)
//     }
// }

function Fruit(name, emoji){
    this.name = name;
    this.emoji = emoji
    this.display = () =>{
        console.log(`${this.name}: ${this.emoji}`);
    }
    // return this; 생략가능 -> 생략함 대부분
}

const apple = new Fruit('apple', '🍏')
const orange = new Fruit('orange', '🍊')

console.log(apple)
console.log(orange)

apple.display()
orange.display()

/*
    생성자 함수보단 클래스를 사용하자
*/