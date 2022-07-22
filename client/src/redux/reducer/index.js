import { GET_ALL_GAMES, GET_SEARCH_GAMES, GET_SORT_GAMES } from "../actions"

const initialState = {
    gamesView: [],
    cienGames: [],
    searchGame: [],
    sortGames: []
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

        default: {
            return{...state}
        }
    }
}
export default rootReducer