'use strict'

function reusify (Constructor) {
  var head = new Constructor()

  function get () {
    var current = head

    if (current.next) {
      head = current.next
    } else {
      head = new Constructor()
    }

    current.next = null

    return current
  }

  function release (obj) {
    head.next = obj
  }

  return {
    get: get,
    release: release
  }
}

module.exports = reusify
