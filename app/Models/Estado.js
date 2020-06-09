'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Estado extends Model {

    static get fillable(){
        return ['pais_id', 'estado']
    }

    cidades () {
        return this.hasMany('App/Models/Cidade')
    }

    pais () {
        //return this.belongsTo('App/Models/Pais')
        return this.belongsTo('App/Models/Pais', 'pais_id', 'id')
      }
}

module.exports = Estado
