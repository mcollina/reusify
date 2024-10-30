'use strict'

const fib = require('./fib')
const max = 100000000
const start = Date.now()

// create a funcion with the typical error
// pattern, that delegates the heavy load
// to something else
function createNoCodeFunction () {
  /* eslint no-constant-condition: "off" */
  const num = 100

  ;(function () {
    if (null) {
      // do nothing
    } else {
      fib(num)
    }
  })()
}

for (let i = 0; i < max; i++) {
  createNoCodeFunction()
}

const time = Date.now() - start
console.log('Total time', time)
console.log('Total iterations', max)
console.log('Iteration/s', max / time * 1000)
