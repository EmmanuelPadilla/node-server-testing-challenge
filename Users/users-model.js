
const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findById,
	remove,
	update
};

function add(user) {
	return db('users')
		.insert(user)
		.then(ids => {
			return findById(ids[0]);
		});
}
function find() {
	return db('users').select('id', 'user_name');
}
function findById(id) {
	return db('users')
		.where({ id })
		.first();
}
function remove(id) {
	return db('users')
		.where('id', id)
		.del();
}
function update() {
	return null;
}