function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작거나 값이 없음'));
    }
    setTimeout(resolve, seconds * 1000); // resolve는 아무런 인자를 받아서 처리하는게 없어서 간략하게 표현
  }); // Promise를 만들 때 2가지 인자를 전달받아서 무언가 처리하는 콜백함수를 전달해야 한다. then을 호출할 때 사용할 resolve, 실패했을 때 사용할 reject
}

runInDelay(2)
  .then(() => {
    console.log('타이머완료!');
  })
  .catch(console.error)
  .finally(() => console.log('끝났다!'));

// 성공케이스만 보고 싶다면 then함수만 사용하면 되지만, catch가 없을 때는 에러가 발생하면 `UnhandledpromiseRejectionWarning' 에러가 발생함
