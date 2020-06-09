'use strict'

const Country = use('App/Models/Pais')

/**
 * Resourceful controller for interacting with pais
 */
class PaisController {

  async index () {
    const country = Country.all();
  
    return country
}

async show ({ params }) {
    const country = await Country.findOrFail(params.id)
  
    return country
}

async store ({ request, response }){
    const data = request.only(Country.fillable);

    const country = await Country.create(data);
    
    return country;
}

async update({ params, request, response }) {
    const country = await Country.findOrFail(params.id);
    const data = request.only(Country.fillable);
    
    country.merge(data);
    await country.save();
    
    return country
}

async destroy ({ params, request, response}) {
    const country = await Country.findOrFail(params.id)
  
    await country.delete()
  }

}

module.exports = PaisController
