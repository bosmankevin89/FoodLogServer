/*  
    Food_Log_Item
    -----------------------
    A food item available in the library of available foods.

    Numerical values are by serving.  Currently, there is only one serving type: Serving.

    TODO: Implement various serving types and conversions

*/


module.exports = function (sequelize, DataTypes) {

    //Create Model Object
    var model = sequelize.define("food_log_entry", {
        food_log_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        food_uuid: {
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
            foreignKey: 'user_uuid',
            targetKey: 'user_uuid',
            foreignKeyConstraint: true
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
            models.food,
            {
                foreignKey: 'food_uuid',
                targetKey: 'food_uuid',
                foreignKeyConstraint: true
            }
        );
    }

    return model;
};