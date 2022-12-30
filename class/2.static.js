class Fruit{
    static MAX_FRUIT = 4

    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji
    }
    
    display = () =>{
        console.log(`${this.name} : ${this.emoji}`)
    }

    static makeRandomFruit(){
        return new Fruit('banana', '🍌')
    }
}

Fruit.makeRandomFruit().display()
console.log()
console.log(Fruit.MAX_FRUIT)



