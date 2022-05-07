'use strict'

const auth = require("@adonisjs/auth");

const Productos = use ("App/Models/Producto")
class ProductoController {
    async store({ request, response }){
        const data = request.only(['nombre'])
        const dato = new Productos;
        dato.nombre = data['nombre']
        dato.save()

        return response.created({
            status: "201",
            data: dato
        })
    }

    async index({response}){
        const data = await Productos.query().fetch()

        return response.ok({
            status: "201",
            data: data
        })
    }

    async destroy({params}){
      const {id} = params
      const product = await Productos.find(id);

      await product.delete();

      return response.ok({
        message: "Se ha eliminado correctamente"
      });
    }

}


module.exports = ProductoController
