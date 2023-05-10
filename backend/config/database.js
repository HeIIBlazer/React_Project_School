import { Sequelize } from 'sequelize';

const db = new Sequelize('react_school2023', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;