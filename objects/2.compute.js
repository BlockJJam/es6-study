const obj = {
    name: 'elie',
    age: 20
}

// coding 하는 시점에, 정적으로 접근이 확정
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용;
function getValue(obj, key){
    //return obj.key; // 불가
    return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value){
    obj[key]= value;
}

addKey(obj, 'job', 'engineer')
console.log(getValue(obj, 'job'))