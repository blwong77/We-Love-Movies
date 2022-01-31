exports.up = function (knex) {
  return knex.schema.createTable("movies_theaters", (table) => {
    table.boolean("is_showing");
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");
    table
      .foreign("theater_id")
      .references("theater_id")
      .inTable("theaters")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies_theaters");
};
