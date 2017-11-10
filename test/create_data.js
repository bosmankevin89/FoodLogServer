/*
    create_data.js
    -------------------------

    File to generate sample data for testing.

*/

const path = require("path");
const uuidv4 = require('uuid/v4');
const meal_enum = require(path.join(__dirname, '..', 'enum', 'meal_types.js'));
const models = require(path.join(__dirname, '..', 'models', 'index.js'));

//Create module
var dataModule = {};

/*
    Initialize shared values.
    
    Some UUIDs are stored to allow test data to be easily linked between tables.

*/
var test_uuids = {
    //User
    userUUID: uuidv4(),
    //Measurement
    measurementUUID: uuidv4(),
    //Breakfast Food Items
    eggsFoodItemUUID: uuidv4(),
    baconFoodItemUUID: uuidv4(),
    toastFoodItemUUID: uuidv4(),
    //Lunch Food Items
    sandwichFoodItemUUID: uuidv4(),
    chipsFoodItemUUID: uuidv4(),
    appleFoodItemUUID: uuidv4(),
    //Dinner Food Items
    chickenFoodItemUUID: uuidv4(),
    potatoFoodItemUUID: uuidv4(),
    carrotFoodItemUUID: uuidv4(),
    //Snack Food Items
    granolaFoodItemUUID: uuidv4(),
    coffeeFoodItemUUID: uuidv4()
};


//Initialize Sample Data
dataModule.initSampleData = function () {

    //Initialize User
    models.user.bulkCreate(
        [
            {
                user_uuid: test_uuids.userUUID,
                display_name: 'Example Exampleson Jr',
                google_id: 'EXAMPLE'
            },
            {
                user_uuid: uuidv4(),
                display_name: 'No-Log Examplebert',
                google_id: 'NO_LOG_EXAMPLE'
            }
        ]
    ).then(function () {
        //Initialize Measurements
        models.measurement.create(
            {
                measurement_uuid: test_uuids.measurementUUID,
                measurement_name: 'Serving',
                measurement_group: 'SINGLE'
            }
        ).then(function () {
            //Initialize Food Items
            models.food_item.bulkCreate(
                [
                    {
                        food_item_uuid: test_uuids.eggsFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Eggs',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.baconFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Bacon',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.appleFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Apple',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.carrotFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Carrots',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.chickenFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Chicken',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.chipsFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Chips',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.coffeeFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Coffee',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.granolaFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Granola Bar',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.potatoFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Potatoes',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.sandwichFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Sandwich',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    },
                    {
                        food_item_uuid: test_uuids.toastFoodItemUUID,
                        brand_name: 'Test Brand',
                        display_name: 'Toast',
                        default_measurement_uuid: test_uuids.measurementUUID,
                        calories: 100.0

                    }
                ]
            ).then(function () {
                //Create Food Log Items
                models.food_log_item.bulkCreate(
                    [
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.eggsFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 2.0,
                            date: new Date(), //Today
                            meal: meal_enum.BREAKFAST
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.baconFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 2.0,
                            date: new Date(), //Today
                            meal: meal_enum.BREAKFAST
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.toastFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 2.0,
                            date: new Date(), //Today
                            meal: meal_enum.BREAKFAST
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.appleFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 2.0,
                            date: new Date(), //Today
                            meal: meal_enum.LUNCH
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.sandwichFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 2.0,
                            date: new Date(), //Today
                            meal: meal_enum.LUNCH
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.chipsFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 2.0,
                            date: new Date(), //Today
                            meal: meal_enum.LUNCH
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.chickenFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 1.0,
                            date: new Date(), //Today
                            meal: meal_enum.DINNER
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.potatoFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 2.0,
                            date: new Date(), //Today
                            meal: meal_enum.DINNER
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.carrotFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 25.0,
                            date: new Date(), //Today
                            meal: meal_enum.DINNER
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.granolaFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 1.0,
                            date: new Date(), //Today
                            meal: meal_enum.SNACK
                        },
                        {
                            food_log_item_uuid: uuidv4(),
                            user_uuid: test_uuids.userUUID,
                            food_item_uuid: test_uuids.coffeeFoodItemUUID,
                            measurement_uuid: test_uuids.measurementUUID,
                            measurement_units: 1.0,
                            date: new Date(), //Today
                            meal: meal_enum.SNACK
                        },
                    ]
                )
            })
        })
    }).catch(error => {
        console.log(error);
    });
};


//Export Module
module.exports = dataModule;