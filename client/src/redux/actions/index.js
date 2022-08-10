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
        return axios.get(`/videogames`)
            
            .then(data => dispatch({ type: GET_ALL_GAMES, payload: data.data }))
    }
}

export const getSearchGames = (game) => {

    return function (dispatch) {

        return axios.get(`/videogames?name=${game}`)
           
            .then(data => dispatch({ type: GET_SEARCH_GAMES, payload: data.data }))
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
            return axios.get(`/videogame/${id}`)
                
                .then(data => dispatch({
                    type: GET_GAME_DETAIL,
                    payload: data.data
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
        return axios.get(`/genre`)
       
        .then( data => dispatch({
            type: GET_ALL_GENRES,
            payload: data.data
        }))
    }
}

export function createGame(game){
    return function(dispatch){
        return axios.post("/videogames",
        
             
        game.image == "" ? {
                name: game.name,
                description: game.description,
                platforms: game.platforms,
                rating: game.rating,
                genres: game.genres,
                releaseDate: game.releaseDate
            }:{
                name: game.name,
                description: game.description,
                platforms: game.platforms,
                rating: game.rating,
                image: game.image,
                genres: game.genres,
                releaseDate: game.releaseDate
            }
        )
        .then(d => {dispatch({type: CREATE_GAME, payload: d.data})})
        .catch((e) => {console.log(e)})
        // fetch("/videogames", {
        //     method: "POST" ,
        //     headers: {
        //         "Content-Type": "application/json",

        //     },
        //     body: 
        // JSON.stringify(game.image == "" ? {
        //         name: game.name,
        //         description: game.description,
        //         platforms: game.platforms,
        //         rating: game.rating,
        //         genres: game.genres,
        //         releaseDate: game.releaseDate
        //     }:{
        //         name: game.name,
        //         description: game.description,
        //         platforms: game.platforms,
        //         rating: game.rating,
        //         image: game.image,
        //         genres: game.genres,
        //         releaseDate: game.releaseDate
        //     })
        // })
        // .then(d => d.json())
        // .then(r => {dispatch({type: CREATE_GAME, payload: r})})
        // .catch((e)=> {console.log(e)})
    }
}

export const gamesFilter = (games) => {
    return {
        type: FILTER_GAMES,
        payload: games
    }


}
