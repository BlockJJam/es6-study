// generator 표시
function* multipleGenerator() {
    try{
        for (let i = 0; i < 10; i++) {
            yield i ** 2;
        }
    }catch(error){
        console.log(error);
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// generator 종료
//multiple.return();
multiple.throw('Error!')