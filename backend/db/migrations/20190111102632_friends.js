exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', table => {
    table.increments();
    table.integer('user_id').notNullable();
    table.integer('friend_id').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends')
};