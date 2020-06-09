'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cidade = use('App/Models/Cidade')

/**
 * Resourceful controller for interacting with cidades
 */
class CidadeController {

  async store ({ request, response }){
    const data = request.only(Cidade.fillable);

    const cidade = await Cidade.create(data);
    
    return cidade;
  }

}

module.exports = CidadeController
