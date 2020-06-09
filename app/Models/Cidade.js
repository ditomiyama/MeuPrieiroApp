'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Cidade extends Model {

    users () {
        return this.hasMany('App/Models/User')
    }

    estados () {
        return this.belongsTo('App/Models/Estado')
      }
}


module.exports = Cidade
