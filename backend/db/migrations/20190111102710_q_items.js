
exports.up = function(knex, Promise) {
  return knex.schema.createTable('q_items', table=> {
    table.increments();
    table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable();
    table.string('type').notNullable().defaultsTo('Other');
    table.boolean('read').notNullable().defaultsTo(false);
    table.boolean('starred').notNullable().defaultsTo(false);
    table.text('url').notNullable().defaultsTo('');
    table.text('img').notNullable().defaultsTo('');
    table.integer('referral_id').notNullable();
    table.string('desc').notNullable().defaultsTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('q_items')
};
