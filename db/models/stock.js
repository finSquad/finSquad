module.exports = function(sequelize, dataTypes) {
    var Stock = sequelize.define("Stock", {
        currencyType: dataTypes.STRING,
        priceUSD: dataTypes.DECIMAL,
        priceBTC: dataTypes.DECIMAL,
    }, {
        timestamps: true
    })
    return Stock;
}
