module.exports = function(sequelize, dataTypes) {
<<<<<<< HEAD
    var Stock = sequelize.define("Stock", {
        currencyType: dataTypes.STRING,
        priceUSD: dataTypes.DECIMAL,
        priceBTC: dataTypes.DECIMAL,
    }, {
        timestamps: true
    })
    return Stock;
=======
    var Posts = sequelize.define("Stock", {
        wine: dataTypes.STRING,
        description: dataTypes.STRING,
        drinken: {
            type: dataTypes.BOOLEAN,
            validation: {
                isNull: false,
                defaultValue: false
            }
        }
    }, {
        timestamps: false
    });
    return Wine;
>>>>>>> sidebars
}
