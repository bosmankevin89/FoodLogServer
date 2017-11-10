const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require(path.join(__dirname, '..', 'config', 'database.json'));


var sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//Create module object
var db = {};

//Add Models 
fs.readdirSync(__dirname)
    .filter(
    function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    }
    )
    .forEach(
    function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    }
    );


//Define table/model associations for each module imported.
Object.keys(db).forEach(function (modelName) {

    //Skip models without associate function.
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});


//Add sequelize instance
db.sequelize = sequelize;
//db.Sequelize = Sequelize;

module.exports = db;