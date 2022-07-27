
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
    if (e.target.name == "genres") {
      if (e.target.checked) {
        setGameCreated({
          ...gameCreated,
          genres: [...gameCreated.genres, e.target.value]
        })
      }
      else {
        setGameCreated({
          ...gameCreated,
          genres: gameCreated.genres.filter(g => g !== e.target.value)
        })
      }
    }
    else if (e.target.name == "platforms") {
      if (e.target.checked) {
        setGameCreated({
          ...gameCreated,
          platfroms: [...gameCreated.platforms, e.target.value]
        })
      }
      else {
        setGameCreated({
          ...gameCreated,
          platforms: gameCreated.platforms.filter(p => p !== e.target.value)
        })
      }
    }
    else {
      e.preventDefault()
      setGameCreated({
        ...gameCreated,
        [e.target.name]: e.target.value
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createGame(gameCreated))
  }
  const stateGenres = useSelector(state => state.allGenres)
  return (<>

    <h1>Create your game</h1>
    <form onSubmit={(e) => {
      e.preventDefault()
      dispatch(createGame(gameCreated))
      dispatch(getAllGames())
    }}>
      <h4>*Name:</h4>
      <input name="name" required onChange={handleChange} />
      <h4>*Description:</h4>
      <input name="description" required onChange={handleChange} />
      <h4>*Released:</h4>
      <input type="date" name="released" required onChange={handleChange} />
      <h4>*Rating:</h4>
      <input type="number" name="rating" min="0" max="5" required onChange={handleChange} />
      <h4>*Genres:</h4>
      {stateGenres?.map((g, index) => <label name="genres" key={index}><input type="checkbox" name='genres' onClick={handleChange} value={g.name} />{g.name}</label>)}
      <h4>*Platforms:</h4>
      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Linux" />
        Linux
      </label>
      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="PC" />
        PC
      </label>
      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Xbox One" />
        Xbox One
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Playstation 4" />
        Playstation 4
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Xbox 306" />
        Xbox 306
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Playstation 3" />
        Playstation 3
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="macOS" />
        macOS
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Nintendo Switch" />
        Nintendo Switch
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Xbox Series S/X" />
        Xbox Series S/X
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Playstation 5" />
        Playstation 5
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Wii U" />
        Wii U
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Nintendo 3DS" />
        Nintendo 3DS
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="IOS" />
        IOS
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="PS Vita" />
        PS Vita
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Android" />
        Android
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Xbox" />
        Xbox
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Playstation 2" />
        Playstation 2
      </label>

      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Web" />
        Web
      </label>
      <label name="platforms" required onChange={handleChange}>
        <input type="checkbox" name='platforms' onClick={handleChange} value="Dreamcast" />
        Dreamcast
      </label>







      <h4>Image:</h4>
      <input name='image' onChange={handleChange} />
      <input type="submit" value="Enviar" />
    </form>
  </>
  )
}
