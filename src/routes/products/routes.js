const {createData,readDC} = require('../../controllers/products/app')

const route = ({router,makeExpressCallback}) => {
    //insert Deliveries 
    router.post('/products/add/',makeExpressCallback(createData))
    //fetch Delivery_code
    router.get('/products/delivery-code/',makeExpressCallback(readDC))
    return router
}
module.exports = route