const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
	it('should see the testing environment', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	describe('endpoints', () => {
		describe('GET /', () => {
			it('should return 200 ok using async/await', async () => {
				const res = await request(server).get('/');
				expect(res.status).toBe(200);
			});

			it('should return JSON', done => {
				request(server)
					.get('/')
					.then(res => {
						expect(res.type).toMatch(/json/i);
						done();
					});
			});

			it('should return {api: "up"}', async () => {
				const res = await request(server).get('/');
				expect(res.body).toEqual({ api: 'up' });
			});
		});
	});
});