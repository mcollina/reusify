'use strict'

function fib (num) {
  const fib = []

  fib[0] = 0
  fib[1] = 1
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }
}

module.exports = fib
