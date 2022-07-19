const axios = require('axios');
const { Router } = require('express');
const {
    ApiKey
  } = process.env;
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
    
    try{
        const ress = await axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=01f6bbea3ed5415587f9d9a469a2d3f7`)
        const data = ress.data
        res.json(data)}
        catch(e){
            res.status(404).send(`No coincide ningun ID`)
        }
    
})
module.exports = router;
