class Fruit{
    // 접근 제어자
    // private(#), public(기본), protected
    #name
    #emoji
    
    constructor(name, emoji){
        this.#name = name;
        this.#emoji = emoji
    }
    
    display = () =>{
        console.log(`${this.#name} : ${this.#emoji}`)
    }

}


apple = new Fruit('a','🍏')

console.log(apple)
apple.display()