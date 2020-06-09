'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CidadeSchema extends Schema {
  up () {
    this.create('cidades', (table) => {
      table.increments()
      table
        .integer('estado_id')
        .unsigned()
        .references('id')
        .inTable('estados')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('cidade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cidades')
  }
}

module.exports = CidadeSchema
