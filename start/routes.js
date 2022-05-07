'use strict'

const { RouteGroup, route } = require('@adonisjs/framework/src/Route/Manager')


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Login
Route.post('/login', 'AuthController.login')
//registro de user
Route.post('users', 'UserController.store')


//ruta con token y usando apiresource
Route.group(() => {
  Route.resource('providers', 'ProviderController')

}).middleware(['auth'])
