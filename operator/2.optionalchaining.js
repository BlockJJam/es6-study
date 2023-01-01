// 옵셔널 체이닝 연산자
// ES11 ( ESMA2020)

let item;
const price = item?.price || 'new price';
console.log(price)


const ownerName = item?.owner?.name;
