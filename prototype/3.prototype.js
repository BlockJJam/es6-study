// const dog1 = { name: 'λ­μΉ', emoji: 'πΆ' };
// const dog2 = { name: 'μ½μ½', emoji: 'πβπ¦Ί' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  // μΈμ€ν΄μ€ λ λ²¨μ ν¨μ => κ·Όλ° μΈμ€ν΄μ€ λ§λ€ λλ§λ€ μμ±νλ©΄ λ©λͺ¨λ¦¬ λ­λΉ μλκ°? => νλ‘ν νμ ν¨μλ‘ λ§μμΌ ν¨
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}

// νλ‘ν νμμ ν¨μ
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('λ­μΉ', 'πΆ');
dog1.printName();

// μ€λ²λΌμ΄λ©
// μΈμ€ν΄μ€ λ λ²¨μμ(μμ) λμΌν μ΄λ¦μΌλ‘ ν¨μλ₯Ό μ¬μ μνλ©΄ (μ€λ²λΌμ΄λ© νλ©΄)
// νλ‘ν νμ λ λ²¨μ(λΆλͺ¨) ν¨μμ νλ‘νΌν°λ κ°λ €μ§λ€(μλμ)

dog1.printName = function () {
  console.log('νμ΄μ!');
};
dog1.printName();

// μ μ λ λ²¨
Dog.hello = () => {
  console.log('Hello!');
};

// dog1.hello()
Dog.hello();
Dog.MAX_LEVEL = 20;
dog1.MAX_LEVEL = 10;
console.log(dog1.MAX_LEVEL, Dog.MAX_LEVEL);
