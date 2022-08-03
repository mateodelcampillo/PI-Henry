import axios from "axios"
export const GET_ALL_GAMES = "GET_ALL_GAMES"
export const GET_SEARCH_GAMES = "GET_SEARCH_GAMES"
export const GET_SORT_GAMES = "GET_SORT_GAMES"
export const GET_GAME_DETAIL = "GET_GAME_DETAIL"
export const GET_ALL_GENRES = "GET_ALL_GENRES"
export const CREATE_GAME = "CREATE_GAME"
export const FILTER_GAMES = "FILTER_GAMES"

export const getAllGames = () => {
    
    return function (dispatch) {
        return fetch(`http://localhost:3001/videogames`)
            .then(d => d.json())
            .then(data => dispatch({ type: GET_ALL_GAMES, payload: data }))
    }
}

export const getSearchGames = (game) => {

    return function (dispatch) {

        return fetch(`http://localhost:3001/videogames?name=${game}`)
            .then(d => d.json())
            .then(data => dispatch({ type: GET_SEARCH_GAMES, payload: data }))
            .catch((e)=> alert("No se a encontrado ningun juego"))
    }
}

export const getSortGames = (games) => {
    return {
        type: GET_SORT_GAMES,
        payload: games
    }


}

export const getDetailGame = (id) => {
    if (id) {
        return function (dispatch) {
            return fetch(`http://localhost:3001/videogame/${id}`)
                .then(d => d.json())
                .then(data => dispatch({
                    type: GET_GAME_DETAIL,
                    payload: data
                }))

        }
    }
    else {
        return {
            type: GET_GAME_DETAIL,
            payload: ""
        }
    }
}

export const getAllGenres = () =>{
    return function(dispatch){
        return fetch(`http://localhost:3001/genre`)
        .then(d => d.json())
        .then( data => dispatch({
            type: GET_ALL_GENRES,
            payload: data
        }))
    }
}

export function createGame(game){
    return function(dispatch){
        // return axios.post("http://localhost:3001/videogames",
        // {
        //     name: game.name,
        //     description: game.description,
        //     platforms: game.platforms,
        //     rating: game.rating,
        //     image: game.image,
        //     genres: game.genres,
        //     releaseDate: game.releaseDate
        // })
        // .then(d => {dispatch({type: CREATE_GAME, payload: d.data})})
        // .catch((e) => {console.log(e)})
        fetch("http://localhost:3001/videogames", {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                name: game.name,
                description: game.description,
                platforms: game.platforms,
                rating: game.rating,
                image: game.image,
                genres: game.genres,
                releaseDate: game.releaseDate
            })
        })
        .then(d => d.json())
        .then(r => {dispatch({type: CREATE_GAME, payload: r})})
        .catch((e)=> {console.log(e)})
    }
}

export const gamesFilter = (games) => {
    return {
        type: FILTER_GAMES,
        payload: games
    }


}
