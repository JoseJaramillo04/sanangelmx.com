const PORT = 8000;
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const app = express()

app.use(cors())

app.get('/products/items', async (req,res) => {
    let offset = 0
    let items = []
    
    let data = []

    //Loop queries ALL products, despite the 1000 hard limit
    do{
        const options = {method: 'GET',
        url:`https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/items?limit=1000&offset=${offset}`,
        headers: {authorization: `Bearer ${process.env.CLOVER_API_KEY}`}};


        data = await axios.request(options).then((response) =>{
            return response.data.elements
        }).catch((error)=>{
            console.error(error)
        })

        items= items.concat(data)
        offset = items.length
    }while(data.length === 1000);

    
    //Clean up the JSON
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
        let date = new Date(parseInt(element.modifiedTime))
        element.modifiedTime = date.getMonth()+'/'+date.getDay()+'/'+date.getFullYear()+' at '+ date.toLocaleTimeString('en-US',
        {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
    });
   
     res.json(items)
} )

app.get('/category', async (req,res) => {
    let offset = 0
    let categories = []
    
    let data = []

    //Loop queries ALL products, despite the 1000 hard limit
    do{
        const options = {method: 'GET',
        url:`https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/categories?limit=1000&offset=${offset}`,
        headers: {authorization: `Bearer ${process.env.CLOVER_API_KEY}`}};


        data = await axios.request(options).then((response) =>{
            return response.data.elements
        }).catch((error)=>{
            console.error(error)
        })

        if(data === undefined){
            res.json([])
            return 
        }

        categories= categories.concat(data)
        offset = categories.length
    }while(data.length === 1000);
   
     res.json(categories.reverse())
} )

app.get('/category/:categoryId', async (req,res) => {
    const {categoryId} = req.params;
    let offset = 0
    let items = []
    
    let data = []

    //Loop queries ALL products, despite the 1000 hard limit
    do{
        const options = {method: 'GET',
        url:`https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/categories/${categoryId}/items?limit=1000&offset=${offset}`,
        headers: {authorization: `Bearer ${process.env.CLOVER_API_KEY}`}};


        data = await axios.request(options).then((response) =>{
            return response.data.elements
        }).catch((error)=>{
            console.error(error)
        })

        if(data === undefined){
            res.json([])
            return 
        }

        items= items.concat(data)
        offset = items.length
    }while(data.length === 1000);
    
    
    //Clean up the JSON
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
        let date = new Date(parseInt(element.modifiedTime))
        element.modifiedTime = date.getMonth()+'/'+date.getDay()+'/'+date.getFullYear()+' at '+ date.toLocaleTimeString('en-US',
        {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
    });

    res.json(items)
} )

app.get('/category/:categoryId/name', async (req,res) => {
    const {categoryId} = req.params;
    
    let data = []

    //Loop queries ALL products, despite the 1000 hard limit
  
    const options = {method: 'GET',
    url:`https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/categories/${categoryId}`,
    headers: {authorization: `Bearer ${process.env.CLOVER_API_KEY}`}};


    data = await axios.request(options).then((response) =>{
        return response.data
    }).catch((error)=>{
        console.error(error)
    })

    if(data === undefined){
        res.json([])
        return 
    }

    res.json(data)
} )

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))