// const apple = {
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name}: π`)
//     }
// }


// const orange = {
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}: π`)
//     }
// }

function Fruit(name, emoji){
    this.name = name;
    this.emoji = emoji
    this.display = () =>{
        console.log(`${this.name}: ${this.emoji}`);
    }
    // return this; μλ΅κ°λ₯ -> μλ΅ν¨ λλΆλΆ
}

const apple = new Fruit('apple', 'π')
const orange = new Fruit('orange', 'π')

console.log(apple)
console.log(orange)

apple.display()
orange.display()

/*
    μμ±μ ν¨μλ³΄λ¨ ν΄λμ€λ₯Ό μ¬μ©νμ
*/