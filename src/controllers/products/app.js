const {insertProduct,fetchDeliveryCode} = require('../../use-case/products/app')

const createDatas = require('./createController') 
const readCode = require('./readCode.js')
//attched here the usecases and manipulate the data from the function
const createData = createDatas({insertProduct}) 
const readDC = readCode({fetchDeliveryCode})

const services = Object.freeze({
createData,readDC
})

module.exports = services
module.exports = {createData,readDC}
