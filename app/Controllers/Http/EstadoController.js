"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Estado = use("App/Models/Estado");

/**
 * Resourceful controller for interacting with estados
 */
class EstadoController {
  async index() {
    const estados = await Estado.query().with("pais").fetch();
    // add varios comentarios
    //retorno
    return estados;
  }

  async show({ params }) {
    const estado = await Estado.findOrFail(params.id);
    await estado.load("pais");
    // add varios comentarios
    //await estado.getRelated('pais')
    //teste
    return estado;
  }

  /*async store({ request, response }) {
    const data = request.only(Estado.fillable);
    // add varios comentarios
    //contante
    const estado = await Estado.create(data);

    return estado;
  }*/

  //aqui
  //deve ser
  //criado
  //todos
  //metodos
  //de banco


  async store ({ request, response }){
    const data = request.only(Estado.fillable);
    // add varios comentarios
    //contante
    const estado = await Estado.create(data);
    
    return estado;
  }
  
  async delete({ params: { id }, request, response }) {
    const estado = await Estado.findOrFail(id);
    // add varios comentarios
    //contante
    await estado.delete();

    return {};
  }

  /*async store ({ request, response }){
    const data = request.only(Estado.fillable);

    const estado = await Estado.create(data);

    return estado;
  }*/

  //aqui
  //deve ser
  //criado
  //todos
  //metodos
  //de banco

  /*async index() {
    const estados = await Estado.query().with("pais").fetch();
    // add varios comentarios
    //retorno
    return estados;
  }*/

}

module.exports = EstadoController;
