'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table
        .integer('cidade_id')
        .unsigned()
        .references('id')
        .inTable('cidades')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('endereco')
      table.integer('idade')
      table.string('apelido')
      table.date('niver')
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
