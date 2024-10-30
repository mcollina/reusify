'use strict'

function reusify (Constructor) {
  let head = new Constructor()
  let tail = head

  function get () {
    const current = head

    if (current.next) {
      head = current.next
    } else {
      head = new Constructor()
      tail = head
    }

    current.next = null

    return current
  }

  function release (obj) {
    tail.next = obj
    tail = obj
  }

  return {
    get,
    release
  }
}

module.exports = reusify
