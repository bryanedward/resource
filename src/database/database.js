import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'd492uulkgj50v8',
    'socsdbwmdprgjw',
    '05d26ece79e4c9d477325e49230524bd37522df9d06f7bac087b1bdb4b47296e',
    {
        host: 'ec2-75-101-131-79.compute-1.amazonaws.com',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)
