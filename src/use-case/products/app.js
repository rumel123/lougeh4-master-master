const DataSanitize = require('../../entities/products/app')
const query = require('../../data-access/connection/products/app')
const insertProducts = require('./addProducts')
const fetchDelCode = require('./fetch-DeliveryCode')

const insertProduct = insertProducts({DataSanitize,query})
const fetchDeliveryCode = fetchDelCode({query})

const services = Object.freeze({
    insertProduct,fetchDeliveryCode
})

 module.exports = services
 module.exports = {insertProduct,fetchDeliveryCode}