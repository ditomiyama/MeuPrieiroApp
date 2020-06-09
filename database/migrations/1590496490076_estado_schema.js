'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstadoSchema extends Schema {
  up () {
    this.create('estados', (table) => {
      table.increments()
      table
        .integer('pais_id')
        .unsigned()
        .references('id')
        .inTable('pais')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('estado').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('estados')
  }
}

module.exports = EstadoSchema
