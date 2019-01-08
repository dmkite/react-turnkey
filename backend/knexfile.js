'use strict';
const path = require('path');
const {projectName, dbName} = require('../project-details')

module.exports = {
    development: {
        client: 'pg',
        connection: `postgres://localhost/${dbName}_dev`,
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    },

    test: {
        client: 'pg',
        connection: `postgres://localhost/${dbName}_test`,
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    }
};

