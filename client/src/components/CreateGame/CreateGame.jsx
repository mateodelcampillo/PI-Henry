
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createGame, getAllGames } from '../../redux/actions'

export default function CreateGame() {
  const dispatch = useDispatch()
    const [gameCreated, setGameCreated] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: 0,
        genres: [],
        platforms: [],
        image: ""
    })
    const handleChange = (e) => {
      if(e.target.name == "genres"){
        if(e.target.checked){
          setGameCreated({
            ...gameCreated,
            genres: [...gameCreated.genres, e.target.value]
          })
        }
        else{
          setGameCreated({
            ...gameCreated,
            genres: gameCreated.genres.filter(g => g !== e.target.value)
          })
        }
      }else{
      e.preventDefault()
      setGameCreated({
        ...gameCreated,
        [e.target.name] : e.target.value
      })
    }}
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(createGame(gameCreated))
    }
    const stateGenres = useSelector(state => state.allGenres)
  return (<>

  <h1>Create your game</h1>
    <form onSubmit={(e)=>{
      e.preventDefault()
      dispatch(createGame(gameCreated))
      dispatch(getAllGames())
    }}>
        <h4>*Name:</h4>
        <input name="name" required onChange={handleChange} />
        <h4>*Description:</h4>
        <input name="description" required onChange={handleChange}/>
        <h4>*Released:</h4>
        <input type="date" name="released" required onChange={handleChange}/>
        <h4>*Rating:</h4>
        <input type="number" name="rating" min="0" max="5" required onChange={handleChange}/>
        <h4>*Genres:</h4>
        {stateGenres?.map(g=> <label name="genres" ><input type="checkbox" name='genres' onClick={handleChange} value={g.name}/>{g.name}</label>)}
        <h4>*Platforms:</h4>
        <select name="platforms" required onChange={handleChange}>
        <option value="action">Action</option>
                <option value="linux">Linux</option>
                <option value="pc">PC</option>
                <option value="xbox-one">Xbox One</option>
                <option value="playstation-4">Playstation 4</option>
                <option value="xbox-360">Xbox 360</option>
                <option value="playstation-3">Playstation 3</option>
                <option value="macOS">macOS</option>
                <option value="nintendo-switch">Nintendo Switch</option>
                <option value="xbox-series-s/x">Xbox Series S/X</option>
                <option value="playstation-5">Playstation 5</option>
                <option value="wii-u">Wii U</option>
                <option value="nintendo-3ds">NINTENDO 3DS</option>
                <option value="ios">IOS</option>
                <option value="ps-vita">PS Vita</option>
                <option value="android">Android</option>
                <option value="xbox">Xbox</option>
                <option value="playstation-2">Playstation 2</option>
                <option value="dreamcast">Dreamcast</option>
                <option value="web">Web</option>
        </select>
        <h4>Image:</h4>
        <input name='image' onChange={handleChange}/>
        <input type="submit" value="Enviar"/>
    </form>
    </>
  )
}
