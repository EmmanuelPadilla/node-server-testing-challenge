const Users = require('./users-model.js');
const db = require('../data/dbConfig');

describe('users model', () => {
	beforeEach(async () => {
		await db('users').truncate();
	});

	it('should set environment to testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	describe('add()', () => {
		it('should add Users into the db', async () => {
			await Users.add({ user_name: 'Pat' })

			let users = await db('users');
			// console.log(users);
			expect(users).toHaveLength(1);
		});
	});

	describe('remove()', () => {
		it('should remove User from db', async () => {
			await Users.remove({id: 2})

			let users = await db('users')
			console.log(users)
			expect(users).toHaveLength(0)
		})
	})


});