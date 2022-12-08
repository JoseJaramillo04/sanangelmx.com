const PORT = 8000;
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const app = express()

app.use(cors())

app.get('/products/items', async (req,res) => {
    const options = {method: 'GET',
     url:`https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/items?limit=999`,
     headers: {authorization: `Bearer ${process.env.CLOVER_API_KEY}`}};

    const items = await axios.request(options).then((response) =>{
        return response.data.elements
    }).catch((error)=>{
        console.error(error)
    })

    items.forEach(element => {
        delete element.autoManage
        delete element.alternateName
        delete element.code
        delete element.sku
        delete element.price
        delete element.priceType
        delete element.defaultTaxRates
        delete element.cost
        delete element.isRevenue
        delete element.priceWithoutVat
    });
   
     res.json(items)
} )

app.listen(8000,()=> console.log(`Server is running on port ${PORT}`))