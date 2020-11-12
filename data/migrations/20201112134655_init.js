  
exports.up = function(knex, ) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments();

		tbl
			.string('user_name', 20)
			.notNullable()
			.unique();

		tbl.string('tweet', 156);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users');
};