const fruits = ['π', 'π', 'π']

console.log(fruits[0])

fruits.push('π')
console.log(fruits)
fruits.pop()
console.log(fruits)

console.log(Array.isArray(fruits), Array.isArray({}))

console.log(fruits.indexOf('π'))
const newFruits = ['π₯','π₯']

let len = fruits.push(newFruits)
console.log(fruits)

fruits.unshift('hello') // μμ μΆκ°
console.log(fruits)

fruits.shift() // μμ μ κ±°
console.log(fruits)

fruits.pop()
fruits.splice(0,3,'π₯','π₯')
console.log(fruits)
console.clear()

let arr = [[1, 2, 3], [4, [5,6]]]
console.log(arr.flat(2))

arr = arr.flat(3)
arr.fill(0)
console.log(arr)
arr.fill('s',1,3) // 1 ~3
console.log(arr)

console.log(arr.join('-'))
console.clear()

const item1 = {name:"bob", price:2}
const item2 = {name:'pop', price:4}
const item3 = {name:'test', price:0}
const products = [item1, item2, item3]

const found = products.find((value) =>{ // μ‘°κ±΄μ λ§λ μ μΌ μ²μ κ°
    return value.name === 'pop'
})
console.log(found)

let result = products.some((item)=> item.name === 'pop')
console.log(result)

result = products.every((item) => item.name ==='pop')
console.log(result)

result = products.filter((item) => item.name !== 'pop')
console.log(result)

result = products.map((item) => item.price *10)
console.log(result)

const nums = [1,2,3,4,5]
// FlatMap
result = nums.map((item)=> [1,2])
console.log(result)

result = nums.flatMap((item)=>[1,2])
console.log(result)

result = ['dream','coding'].flatMap((item) => item.split(''))
console.log(result)

// sort
const text = []
const numbers = [0,5,4,1,3,10]
numbers.sort()
console.log(numbers)
numbers.sort((a,b) => a-b)
console.log(numbers)
console.clear()

result = [1,2,3,4,5].reduce((sum,value) => {
    sum += value
    return sum
}, 10)

console.log(result)
