export const GET_ALL_GAMES = "GET_ALL_GAMES"
export const GET_SEARCH_GAMES = "GET_SEARCH_GAMES"
export const GET_SORT_GAMES = "GET_SORT_GAMES"
export const GET_GAME_DETAIL = "GET_GAME_DETAIL"

export const getAllGames = () => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/videogames`)
            .then(d => d.json())
            .then(data => dispatch({ type: GET_ALL_GAMES, payload: data }))
    }
}

export const getSearchGames = (game) => {

    return async function (dispatch) {

        return fetch(`http://localhost:3001/videogames?name=${game}`)
            .then(d => d.json())
            .then(data => dispatch({ type: GET_SEARCH_GAMES, payload: data }))
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