console.log(Date.now())
console.log(Date.parse('2022-12-17T03:04:20'))

const now = new Date();
now.setFullYear(2023)
now.setMonth(10); // 0: 1월

console.log(now.toLocaleDateString())
