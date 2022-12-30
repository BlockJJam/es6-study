// iteration protocol - 순회가능한 프로토콜
// - Array, String, Map, Set
// - 순회가 가능하려면 Iterable 프로토콜을 따라야 한다는 의미
// - [Symbol.iterator](): Iterator 프로토콜을 반환 -> 즉, Symbol.iterator()라는 이름의 함수를 만들고, Iterator 프로토콜을 따르는 객체를 만들면 for ... of를 사용가능하다
/*
{
    [Symbol.iterator](): Iterator protocol {next():다음값}
}
*/

const array = [1,2,3]
for( const item of array){
    console.log(item)
}
for( const item of array.entries()){
    console.log(item)
}
for( const item of array.values()){
    console.log(item)
}

const multiple = {
    // iterable 프로토콜을 사용할 수 있도록, iterator를 만드는 과정
    [Symbol.iterator](){
        const MAX = 10;
        let num = 0;
        return {
            next() {
                return { value: num++ * 2, done: num > MAX};              
            },
        };
    },
};

for( const num of multiple){
    console.log(num)
}
