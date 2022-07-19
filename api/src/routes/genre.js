const { Router } = require('express');
const { Genre } = require("../db")
const axios = require('axios');
const {
    ApiKey
  } = process.env;
    const url = `https://api.rawg.io/api/genres?key=${ApiKey}`

const router = Router();
router.get("/", async(req,res)=>{
    const result = await axios.get(url)
    const api = result.data.results
    try {
        const generos = await Genre.bulkCreate(api)
        res.json(generos)
    } catch (e) {
        res.send(e)
    }

})
module.exports = router