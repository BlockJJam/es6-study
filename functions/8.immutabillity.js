function display(num){
    // display라는 이름과 맞지 않음

    num = 5; // 지역변수
    console.log(num);
}

const value = 4; // 상수
display(value);
console.log(value);

function changeName(obj){
    return {...obj, name: 'Bob'}
}

const elie = {
    name: 'Eile'
}
bob = changeName(elie)

console.log(elie)
console.log(bob)

function changeValue(num){
    return num +1
}

console.log(changeValue(value))