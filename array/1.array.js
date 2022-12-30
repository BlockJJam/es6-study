const anotherArray = [1,2,3,4]

array = Array.from('text')
console.log(array)
array = Array.from(anotherArray)
console.log(array)

// js의 배열은 메모리에 연속적으로 이어져 있지 않고(일반적으로는 배열은 연속적임)
// obj와 유사함 
// js는 배열의 동작을 흉내낸 obj다
array = Array.from({0:'h', 1:'e', 4:'t',length: 4})
console.log(array)
