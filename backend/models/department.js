import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

class Department extends Model { }
Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: { type: DataTypes.STRING },
    },
    {
        sequelize: db,
        tableName: 'departments',
        freezeTableName: true,
        modelName: 'Department',
        timestamps: true,
    }
);

export default Department;