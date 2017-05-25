module.exports = function(sequelize, dataTypes) {
    var Stock = sequelize.define("Stock", {
        currency: dataTypes.STRING,
        priceUSD: dataTypes.DECIMAL,
        priceBTC: dataTypes.DECIMAL,
    }, {
        timestamps: true
    })
    return Stock;
}
