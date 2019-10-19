
function bakeACake() {
  console.log('Start baking the bake!');
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('The cake is ready!'), 1000);
    // reject('error');
  });
}

bakeACake()
  .then(data => console.log(data))
  .catch(error => console.log(error));