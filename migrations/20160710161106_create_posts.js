
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments().primary().index(),
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade'),
    table.string('title'),
    table.text('body'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
