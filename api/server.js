const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const sessionConfig = {
    name: 'biosky',
    secret: 'Dont touch my cookies!',
    cookie: {
        maxAge: 1000 * 90,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false
}



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

module.exports = server;
