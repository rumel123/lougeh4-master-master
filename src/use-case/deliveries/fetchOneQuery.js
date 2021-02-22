const fetchOneItem = ({findDataBC,query}) => {
    return async function post(info) {
        const datas = await findDataBC(info)
        const data = {
            delivery_code:datas.Dc()
        }
        const dataArray = []
        const res = await query.fetchDeliveriesWithProducts({data})
        if(res.rowCount > 0)
    {
        const items = res.rows
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];
                    dataArray.push({
                        id:e.id,
                        title:e.title,
                        composer:e.composer,
                    })
                }
    }
    else
    {
        throw new Error(`Empty Data, Please insert some item first!`)
    }
        return dataArray
    }
}

module.exports = fetchOneItem