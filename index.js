// ask for promise
module.exports = function to (promise) {
  return promise
    .then(val => [null, val])
    .catch(err => [err])
}
