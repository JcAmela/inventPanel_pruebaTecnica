const Sequelize = require('sequelize');

const sequelize = new Sequelize('inventPanel_db', 'root', '1132q0lolailo123', {
    host: 'localhost',
    dialect: 'mysql'
});

// Prueba de conexión
sequelize.authenticate()
.then(() => {
    console.log('Conexión establecida con éxito.');
})
.catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
