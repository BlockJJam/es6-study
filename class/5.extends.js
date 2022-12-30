

class Animal{
    constructor(color){
        this.color = color;
    }

    eat(){
        console.log('eating!');
    }
    sleep(){
        console.log('sleeping!');
    }
}

class Tiger extends Animal{
}

class Dog extends Animal{
    constructor(color, ownerName){
        super(color)
        this.ownerName = ownerName
    }

    play(){
        console.log('playing!');
    }
}

tiger = new Tiger('yellow')
tiger.sleep()

dog = new Dog('dog')
dog.play()
