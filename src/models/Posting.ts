import { Sequelize } from "sequelize/types";
import { Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    class Posting extends Model {
        posting_id?: string;
        company_id?: string;
        position?: string;
        compensation?: string;
        description?: string;
        skill?: string;
        detail?: string;
        deleted?: boolean;
    };
    Posting.init({
        posting_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true
        },
        company_id: {
            type: DataTypes.STRING,
        },
        position: {
            type: DataTypes.STRING,
        },
        compensation: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        skill: {
            type: DataTypes.STRING,
        },
        detail: {
            type: DataTypes.STRING,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
        },
    }, {
        sequelize,
        modelName: 'Posting'
    });
    return Posting;
};
