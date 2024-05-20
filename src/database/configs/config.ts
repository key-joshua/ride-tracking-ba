import dotenv from 'dotenv'
dotenv.config();

module.exports = {
    test: {
        logging: false,
        dialect: 'postgres',
        url: process.env.DATABASE_URL_TEST,
    },

    development: {
        logging: false,
        dialect: 'postgres',
        url: process.env.DATABASE_URL,
    },

    production: {
        logging: false,
        dialect: 'postgres',
        url: process.env.DATABASE_URL,
    }
};
