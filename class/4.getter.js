// 접근자 프로퍼티
// - get ex) 특정 값들을 조합할 때
// - set ex) 0이하의 숫자가 들어오면, 0으로 통일시키는 경우와 같이
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){
        return `${this.lastName} ${this.firstName}`
    }

    set fullName(value){
        console.log('set: ' +value);
    }
}


const student = new Student('kim', 'jaemin')
console.log(student.fullName)
student.fullName = 'test'

console.log(student.fullName)

