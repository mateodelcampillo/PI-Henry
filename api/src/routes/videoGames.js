const axios = require('axios');
const { Router } = require('express');
const { Videogame } = require("../db")
const {
  ApiKey
} = process.env;
const router = Router();

infoDelApiSearch = async (name) => {
const games = []
  const res = await axios.get(`https://api.rawg.io/api/games?key=${ApiKey}&search=${name}`)
  const data = res.data.results
  if (data.length == 0) { throw "No se encontró ningun juego" }
  else {
    const info15 = []
    for (let i = 0; i < 15; i++) {
      info15.push(data[i])
    }
    info15.map(d=> games.push({
      id: d.id,
      name: d.name,
      image: d.background_image,
      releaseDate: d.released,
      rating: d.rating,
      genres: d.genres.map(d=> d.name),
      description: d.description
    }))
    return games
  }
}
infoDelApi2 = async () => {
  const games = []

  for (let i = 1; i < 6; i++) {

    let url = `https://api.rawg.io/api/games?key=${ApiKey}&page=${i}`
    const res = await axios.get(url)
    const data = res.data.results
    data.map(d => games.push({
      id: d.id,
      name: d.name,
      image: d.background_image,
      releaseDate: d.released,
      rating: d.rating,
      genres: d.genres.map(d=> d.name),
      description: d.description
    }))
  }


  return games
}

// console.log(infoDelApi())
// const url = `https://api.rawg.io/api/games?key=${ApiKey}`
router.get("/", async (req, res) => {
  const info = await infoDelApi2()
  const videogames = await Videogame.findAll()
  if (req.query.name) {


    try {
      const infoSearch15 = await infoDelApiSearch(req.query.name)
      res.json(infoSearch15)
    } catch (e) {
      res.status(404).send(e)
    }
  }
  else if(videogames.length > 0){

    try{
      res.json({...info, ...videogames})
    }catch(e){
      res.send(e)
    }
  }
  else {
    try {
      res.json(info)
    } catch (e) {
      res.send(e)
    }
  }
})
router.post("/", async (req, res) => {
  // console.log(req.body)

  try {
    if(req.body.name !== "" && req.body.description !== ""){
    const videogames = await Videogame.create(req.body)
    console.log(videogames)
    res.send(videogames)}
  }
  catch (e) {
    res.status(404).send(e)
  }
})
module.exports = router
