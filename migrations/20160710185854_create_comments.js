
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments().index().primary(),
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade'),
    table.integer('post_id')
      .references('id')
      .inTable('posts')
      .onDelete('cascade'),
    table.text('body'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
