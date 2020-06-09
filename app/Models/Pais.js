'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Pais extends Model {

    static get fillable(){
        return ['pais']
    }

    estados () {
        return this.hasMany('App/Models/Estado')
    }
}

module.exports = Pais
