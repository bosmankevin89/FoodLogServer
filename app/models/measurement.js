/*  
    Measure
    -----------------------
    A measurement with type grouping.

    TODO: Implement various serving types and conversions
*/


module.exports = function (sequelize, DataTypes) {

    //Create Model Object
    var model = sequelize.define("measurement", {
        measurement_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        measurement_name: { type: DataTypes.STRING, allowNull: false },
        //TODO: Should this eventually be a string?
        measurement_group: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: [
                'SINGLE' //No Grouping
            ]
        }
    });

    //Define table associations
    model.associate = function (models) {

        model.hasMany(
            models.food_item,
            {
                foreignKey: 'default_measurement_uuid',
                targetKey: 'measurement_uuid',
                foreignKeyConstraint: true
            }
        );

        model.hasMany(
            models.food_log_item,
            {
                foreignKey: 'measurement_uuid',
                targetKey: 'measurement_uuid',
                foreignKeyConstraint: true
            }
        );
    }

    return model;
};