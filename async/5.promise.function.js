function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => what`);
}

function getChicken() {
  return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬μ μμ'));
  //   return Promise.resolve(`πΉ => π`);
}

fetchEgg('π').then((egg) => console.log(egg));

getChicken()
  .catch(() => 'π')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
