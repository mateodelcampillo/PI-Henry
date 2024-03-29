import { CREATE_GAME, FILTER_GAMES, GET_ALL_GAMES, GET_ALL_GENRES, GET_GAME_DETAIL, GET_SEARCH_GAMES, GET_SORT_GAMES } from "../actions"

const initialState = {
    gamesView: [],
    cienGames: [],
    searchGame: [],
    sortGames: [],
    gameDetail: {},
    allGenres: [],
    filterGames: []
}
const rootReducer = (state = initialState, action) => {
    switch(
        action.type
    )
    {   
        case GET_ALL_GAMES:{
            return{
                ...state,
                gamesView: action.payload,
                cienGames: action.payload
            }
        }
        case GET_SEARCH_GAMES:{
            return{
                ...state,
                gamesView: action.payload
            }
        }
        case GET_SORT_GAMES:{
            return{
                ...state,
                gamesView: action.payload
            }
        }
        case GET_GAME_DETAIL:{
            return{
                ...state,
                gameDetail: action.payload
            }
        }
        case GET_ALL_GENRES:{
            return{
                ...state,
                allGenres: action.payload
            }
        }
        case CREATE_GAME: {
            alert("GAME CREATED SUCCESSFULLY")
            return {...state}
        }
        case FILTER_GAMES:{
            return{
                ...state,
                searchGame: action.payload
            }
        }
        default: {
            return {...state}
        }
    }
}
export default rootReducer