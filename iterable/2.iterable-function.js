// iteration protocol - 순회가능한 프로토콜
// - Array, String, Map, Set
// - 순회가 가능하려면 Iterable 프로토콜을 따라야 한다는 의미
// - [Symbol.iterator](): Iterator 프로토콜을 반환 -> 즉, Symbol.iterator()라는 이름의 함수를 만들고, Iterator 프로토콜을 따르는 객체를 만들면 for ... of를 사용가능하다
/*
{
    [Symbol.iterator](): Iterator protocol {next():다음값}
}
*/

function makeIterable(initValue, maxValue, callback){
    return {
        [Symbol.iterator](){
            let num = initValue;
            return {
                next() {
                    return { value: callback(num++), done: num > maxValue};
                }
            }
        }
    }
}

const multiple = makeIterable(0, 20, (n) => n * 2);
for( const num of multiple){
    console.log(num);
}

