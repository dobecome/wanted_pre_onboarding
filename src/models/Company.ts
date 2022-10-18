import { Sequelize } from "sequelize/types";
import { Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    class Company extends Model {
        company_id?: string;
        name?: string;
        country?: string;
        city?: string;
    };
    Company.init({
        company_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: 'Company'
    });
    return Company;
};
