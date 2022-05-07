"use strict";
const Provider = use ("App/Models/Provider")

const auth = require("@adonisjs/auth");

class ProviderController {
  //post
  async store({ request, response }){
    const data = request.only(['nombre', 'direccion', 'correo'])
    const dato = new Provider
    //campos que se encuentran en la db
    dato.nombre = data['nombre'],
    dato.direccion = data['direccion']
    dato.correo = data['correo']

    dato.save()

    return response.created({
        status: "201",
        data: dato
    })
}

async index(){
  const provider = await Provider.query().fetch()

  return provider;
}

  async destroy({params}){
    const {id} = params
    const provider = await Provider.find(id);

    await provider.delete();

    return provider;
  }

  async update({auth, request, params}){
    const user = await auth.getUser();
    const providerData = request.only(['nombre', 'direccion', 'correo'])
    const provider = await Provider.find(params.id)
    provider.nombre = providerData['nombre'],
    provider.direccion = providerData['direccion']
    provider.correo = providerData['correo']

    provider.save()

    return user.provider;
  }
}

module.exports = ProviderController;
