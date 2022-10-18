import { Sequelize } from "sequelize/types";
import { Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    class ApplyHistory extends Model {
        apply_id?: string;
        posting_id?: string;
        user_id?: string;
    };
    ApplyHistory.init({
        apply_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true
        },
        posting_id: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: 'ApplyHistory'
    });
    return ApplyHistory;
};
