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

    return estados;
  }

  async show({ params }) {
    const estado = await Estado.findOrFail(params.id);
    await estado.load("pais");
    // add varios comentarios
    //await estado.getRelated('pais')
    return estado;
  }

  async store({ request, response }) {
    const data = request.only(Estado.fillable);

    // add varios comentarios
    const estado = await Estado.create(data);

    return estado;
  }
}

module.exports = EstadoController;
