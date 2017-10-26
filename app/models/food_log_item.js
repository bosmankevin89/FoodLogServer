/*  
    Food_Log_Item
    -----------------------
    A food item available in the library of available foods.

    Numerical values are by serving.  Currently, there is only one serving type: Serving.

    TODO: Implement various serving types and conversions

*/


module.exports = function (sequelize, DataTypes) {

    //Create Model Object
    var model = sequelize.define("food_log_item", {
        food_log_item_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        food_item_uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        measurement_uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        measurement_units: { type: DataTypes.DOUBLE, allowNull: false },
        //Move out to separate tables?
        date: { type: DataTypes.DATEONLY, allowNull: false },
        meal: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: [
                'BREAKFAST',
                'LUNCH',
                'DINNER',
                'SNACK'
            ]
        },
    });

    //Define table associations
    model.associate = function (models) {

        model.belongsTo(models.user, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        model.belongsTo(
            models.measurement,
            {
                foreignKey: 'measurement_uuid',
                targetKey: 'measurement_uuid',
                foreignKeyConstraint: true
            }
        );

        model.belongsTo(
            models.food_item,
            {
                foreignKey: 'food_item_uuid',
                targetKey: 'food_item_uuid',
                foreignKeyConstraint: true
            }
        );
    }

    return model;
};