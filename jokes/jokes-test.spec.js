const db = require('../database/dbConfig.js')
const Users = require('./joker-model.js')

describe('auth model', () => {
    describe('insert', () => {
        it('should insert username and password into db', async () => {
            await Users.add({ username: 'bioSky', password: 'sdivvsiod'})
            await Users.add({ username: 'teamguy', password: 'kdfejiji'})

            const users = await db('users')
            expect(users).toHaveLength(2)
        })
    })
})

beforeEach(async () => {
    await db('users').truncate();
})