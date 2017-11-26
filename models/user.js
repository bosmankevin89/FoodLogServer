/*  
    User
    -----------------------
    The current logged-in user.
*/

module.exports = function (sequelize, DataTypes) {

    //Create Model Object
    var model = sequelize.define("user", {
        user_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        sub: { type: DataTypes.STRING, allowNull: false }
    });

    //Define table associations
    model.associate = function(models) {
        model.hasMany(models.food_log_entry);
    }

    return model;
};