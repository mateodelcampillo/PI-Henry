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
    const genres = await Genre.findAll()
    if(genres.length === 0){
    try {
        const generos = await Genre.bulkCreate(api)
        res.json(generos)
    } catch (e) {
        res.send(e)
    }
}
    else{
        res.json(genres)
    }
})
module.exports = router