'use strict'
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

    async getProducto({response}){
        const data = await Productos.query().fetch()

        return response.ok({
            status: "201",
            data: data
        })
    }
    
    
}


module.exports = ProductoController
