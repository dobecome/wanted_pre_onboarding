import fs from 'fs';
import path from 'path';
import { Sequelize, Model } from 'sequelize';

const basename = path.basename(__filename);
const db = {} as any;

// Sequelize ORM - PostgreSQL connection 설정
let sequelize: Sequelize;

sequelize = new Sequelize(
  process.env.DB_INSTANCE || 'wanted',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || '1234qwer!',
  {
    host: process.env.DB_URL || 'localhost',
    port: 5432,
    dialect: 'postgres',
    timezone: '+09:00',
    define: {
      timestamps: true
    },
    dialectOptions: {
      charset: 'utf8mb4',
      dateStrings: true,
      typeCast: true
    }
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
});

// Model 불러오기
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts'
    );
  })
  .forEach(async file => {
    const t = require(path.join(__dirname, file.substr(0, file.length - 3)));
    const model = t.default(sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// force : true - Drop & Create
// alter : true - Alter
// sequelize.sync({ force: true });

// Foreign Key 정의
db['Company'].hasMany(db['Posting'], { foreignKey: 'company_id' });
db['Posting'].belongsTo(db['Company'], { foreignKey: 'company_id' });

db['Posting'].hasMany(db['ApplyHistory'], { foreignKey: 'posting_id' });
db['ApplyHistory'].belongsTo(db['Posting'], { foreignKey: 'posting_id' });

db['User'].hasMany(db['ApplyHistory'], { foreignKey: 'user_id' });
db['ApplyHistory'].belongsTo(db['User'], { foreignKey: 'user_id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
export { sequelize };
