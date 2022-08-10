const axios = require('axios');
const { Router } = require('express');
const {
    ApiKey
  } = process.env;
const { Videogame , Genre} = require("../db")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express")
const genre = require(`./genre`)
const videogames = require(`./videoGames`)

const router = Router();
router.use(express.json())
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/genre', genre)
router.use('/videogames', videogames)
router.get("/videogame/:id", async(req,res)=>{
    let str = req.params.id.toString()
    if(str.length > 9){
    const gameID = await Videogame.findOne({where: {
        id:  req.params.id,
        
    },
    include: [{model: Genre, attributes: ['name'], through: {attributes: []}}]})
    try{
        res.send(gameID)
    }
    catch(e){
        res.status(404).send(e)
    }    
    }
    else
    {try{
        const ress = await axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=01f6bbea3ed5415587f9d9a469a2d3f7`)
        const apiGame = { 
            id: ress.data.id,
            name: ress.data.name,
            image: ress.data.background_image,
            releaseDate: ress.data.released,
            rating: ress.data.rating,
            description: ress.data.description_raw,
            platforms: ress.data.platforms.map(d => d.platform.name),
            genres: ress.data.genres.map(d=>d.name),
            rating_top: ress.data.rating_top,
            extraImage: ress.data.background_image_additional
        }
        
        res.json(apiGame)}
        catch(e){
            res.status(404).send(`No coincide ningun ID`)
        }}
    
})
module.exports = router;
 