const map = new Map([
    ['key1', 'apple'],
    ['key2', 'banana']
])

console.log(map)

// 사이즈 확인
console.log(map.size);
// 존재여부
console.log(map.has('key1'))

// 순회
map.forEach((value, key) => console.log(key, value))
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'))
console.log(map.get('test'))

// 추가
map.set('key3','kiwi')
console.log(map);

// 삭제
map.delete('key3')
console.log(map);

// 전부 삭제
map.clear()
console.log(map);

// obj와 차이 - 형태는 비슷해보이나, 다양한 함수를, 인터페이스에서 차이점을 보인다

