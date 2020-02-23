const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    it('should set test environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('Registering', () => {
        it('should return 201 created', async () => {
            const register = await request(server)
            .post('/api/auth/register')
            .send({
                "username": "123",
                "password": "pass"
            })
            expect(register.status).toBe(201)
        
})
    })
    describe('Logging in', () => {
        it('should return 200 OK', async () => {
            const login = await request(server)
            .post('/api/auth/login')
            .send({
                "username": "123",
	            "password": "pass"
            })
            expect(login.status).toBe(200)
        })
    })
})