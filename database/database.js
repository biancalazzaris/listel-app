const Sequelize = require('sequelize');
const connection = new Sequelize('listel', 'root', 'sqlserver', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: true
}
});

module.exports = connection;