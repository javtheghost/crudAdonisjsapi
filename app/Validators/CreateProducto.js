'use strict'

class CreateProducto {
  get rules () {
    return {
      nombre: 'required',
    }
  }
}

module.exports = CreateProducto
