'use strict'

const reusify = require('../')
const fib = require('./fib')
const instance = reusify(MyObject)
const max = 100000000
const start = Date.now()

function reuseNoCodeFunction () {
  const obj = instance.get()
  obj.num = 100
  obj.func()
  obj.num = 0
  instance.release(obj)
}

function MyObject () {
  this.next = null
  const that = this
  this.num = 0
  this.func = function () {
    /* eslint no-constant-condition: "off" */
    if (null) {
      // do nothing
    } else {
      fib(that.num)
    }
  }
}

for (let i = 0; i < max; i++) {
  reuseNoCodeFunction()
}

const time = Date.now() - start
console.log('Total time', time)
console.log('Total iterations', max)
console.log('Iteration/s', max / time * 1000)
