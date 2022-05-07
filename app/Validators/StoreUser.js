'use strict'

class StoreUser {
  get rules () {
    return {
      email: 'required|email|max:180|unique:users,email',
      password: 'required|max:100'
    }
  }

}


module.exports = StoreUser
