function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => what`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올수 없음'));
  //   return Promise.resolve(`🌹 => 🐓`);
}

fetchEgg('🐔').then((egg) => console.log(egg));

getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
