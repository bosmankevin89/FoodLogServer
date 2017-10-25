/*
    create_data.js
    -------------------------

    File to generate sample data for testing.

*/

const path = require("path");
const uuidv4 = require('uuid/v4');
const models = require(path.join(__dirname, '..', 'models', 'index.js'));

//Create module
var dataModule = {};

//Initialize shared values.
var userUUID = uuidv4();
var measurementUUID = uuidv4();

//Initialize Sample Data
dataModule.initSampleData = function () {

    //Initialize User
    models.user.create(
        {
            user_uuid: userUUID,
            display_name: 'Example Exampleson Jr',
            google_id: 'EXAMPLE'
        }
    ).then(function () {
        //Initialize Measurements
        models.measurement.create(
            {
                measurement_uuid: measurementUUID,
                measurement_name: 'Serving',
                measurement_group: 'SINGLE'
            }
        ).then(function () {
            //Initialize Food Items
            models.food_item.bulkCreate(
                [
                    {
                        food_item_uuid: uuidv4(),
                        brand_name: 'Test Brand',
                        display_name: 'Eggs',
                        default_measurement_uuid: measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: uuidv4(),
                        brand_name: 'Test Brand',
                        display_name: 'Bacon',
                        default_measurement_uuid: measurementUUID,
                        calories: 100.0

                    }
                ]
            )
        })
    }).catch(error => {
        console.log(error);
    });
};


//Export Module
module.exports = dataModule;