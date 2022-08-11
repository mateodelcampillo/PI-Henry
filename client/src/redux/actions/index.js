import axios from "axios"
export const GET_ALL_GAMES = "GET_ALL_GAMES"
export const GET_SEARCH_GAMES = "GET_SEARCH_GAMES"
export const GET_SORT_GAMES = "GET_SORT_GAMES"
export const GET_GAME_DETAIL = "GET_GAME_DETAIL"
export const GET_ALL_GENRES = "GET_ALL_GENRES"
export const CREATE_GAME = "CREATE_GAME"
export const FILTER_GAMES = "FILTER_GAMES"

export const getAllGames = () => {

    return async function (dispatch) {
        try {
            const response = await axios.get(`/videogames`)
            if (response?.data) {
                dispatch({ type: GET_ALL_GAMES, payload: response.data })
            }
        } catch (error) {
            alert(error)
        }




    }
}

export const getSearchGames = (game) => {

    return async function (dispatch) {
        try {
            const response = await axios.get(`/videogames?name=${game}`)
            if (response?.data) { dispatch({ type: GET_SEARCH_GAMES, payload: response.data }) }
        } catch (error) {
            alert(error)
        }



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
        return async function (dispatch) {
            try {
                const response = await axios.get(`/videogame/${id}`)
                if (response?.data) {
                    dispatch({
                        type: GET_GAME_DETAIL,
                        payload: response.data
                    })
                }
            } catch (error) {
                alert(error)
            }





        }
    }
    else {
        return {
            type: GET_GAME_DETAIL,
            payload: ""
        }
    }
}

export const getAllGenres = () => {
    return async function (dispatch) {
        const response = await axios.get(`/genre`)
        try {
            if (response?.data) {
                dispatch({
                    type: GET_ALL_GENRES,
                    payload: response.data
                })
            }
        } catch (error) {
            alert(error)
        }




    }
}

export function createGame(game) {
    return async function (dispatch) {
        const response = await axios.post("/videogames",
        game.image == "" ? {
                name: game.name,
                description: game.description,
                platforms: game.platforms,
                rating: game.rating,
                genres: game.genres,
                releaseDate: game.releaseDate
            } : {
                name: game.name,
                description: game.description,
                platforms: game.platforms,
                rating: game.rating,
                image: game.image,
                genres: game.genres,
                releaseDate: game.releaseDate
            }
        )
        try {
           if(response?.data){dispatch({ type: CREATE_GAME, payload: response.data })} 
        } catch (error) {
            alert(error)
        }
        
            
            
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
