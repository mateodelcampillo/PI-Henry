import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllGames, getSearchGames, getSortGames } from "../../redux/actions"

import GameCard from "../GameCard/GameCard"
import { Pagination } from "./Pagination"

const Home = () => {
    const dispatch = useDispatch()
    const stateGames = useSelector(state => state.gamesView)
    const stateSearchGames = useSelector(state => state.searchGame)
    // const stateSortGames = useSelector(state => state.sortGames)
    
    // useEffect(() => {
    //     dispatch(getAllGames())
    //     }, [])

    const [game, setGame] = useState([])
    const [copyGames, setCopyGames] = useState([stateGames])
    const [sortGame, setSortGame] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(15)
    
    //  Current Posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = [...stateGames.slice(indexOfFirstPost, indexOfLastPost)]
    // Change Page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)
    let handleOnChange = (e) => {
        setGame(e.target.value)
    }
    const filterA = (e) => {
        // e.preventDefault();
        setCopyGames(stateGames)
        if (e.target.value === "A-Z") {
            function sort(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            const gamesSort = stateGames.sort(sort)
            dispatch(getSortGames(gamesSort))
            setSortGame("Juan")
        }
        else if (e.target.value === "Z-A") {
            function sort(x, y) {
                if (x.name < y.name) { return 1; }
                if (x.name > y.name) { return -1; }
                return 0;
            }
            const gamesSort = stateGames.sort(sort)
            dispatch(getSortGames(gamesSort))
            setSortGame("Papa")


        }
        else if (e.target.value === "Orden Alfabetico:") {

            dispatch(getSortGames(copyGames))
            setSortGame("Carlos")

        }
    }
    const filterB = (e) => {
        if (e.target.value === "Best Rated") {
            function sort(x, y) {
                if (x.rating < y.rating) { return 1; }
                if (x.rating > y.rating) { return -1; }
                return 0;
            }
            const gamesSort = stateGames.sort(sort)
            dispatch(getSortGames(gamesSort))
            setSortGame("Juan")
        }
        else if (e.target.value === "Worst Rated") {
            function sort(x, y) {
                if (x.rating < y.rating) { return -1; }
                if (x.rating > y.rating) { return 1; }
                return 0;
            }
            const gamesSort = stateGames.sort(sort)
            dispatch(getSortGames(gamesSort))
            setSortGame("Papa")


        }
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch(getSearchGames(game))
                setGame("")
            }}>
                <input name="game" value={game} onChange={handleOnChange}></input>
                <button type="submit">Search</button>
            </form>
            <button onClick={() => {
                setGame("")
                dispatch(getSearchGames(game))
            }}>Clear</button>

            <select onChange={filterA}>  {/* ORDEN ALFABETICO */}
                <option>Orden Alfabetico:</option>
                <option>A-Z</option>
                <option>Z-A</option>
            </select>

            <select onChange={filterB}>   {/* ORDEN POR RATING */}
                <option>Orden por Rating:</option>
                <option>Best Rated</option>
                <option>Worst Rated</option>
            </select>

            <select>   {/* ORDEN POR GENERO */}
                <option>Filtrar por Genero:</option>
                <option>Action</option>
                <option>Indie</option>
                <option>Adventure</option>
                <option>RPG</option>
                <option>Strategy</option>
                <option>Shooter</option>
                <option>Casual</option>
                <option>Simulation</option>
                <option>Puzzle</option>
                <option>Arcade</option>
                <option>Platformer</option>
                <option>Racing</option>
                <option>Massiveley Multiplayer</option>
                <option>Sports</option>
                <option>Fighting</option>
                <option>Family</option>
                <option>Board Games</option>
                <option>Educational</option>
                <option>Card</option>
            </select>


            {Object.keys(stateSearchGames).length > 0 ?
                stateSearchGames.map(e => <GameCard
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    image={e.image}
                    description={e.description}
                    releaseDate={e.releaseDate}
                    rating={e.rating} />) :

                currentPosts?.map(e => <GameCard
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    image={e.image}
                    description={e.description}
                    releaseDate={e.releaseDate}
                    rating={e.rating} />)
                
            }

            <Pagination postsPerPage={postsPerPage} paginate={paginate} totalPosts={stateSearchGames.length > 1 ?stateSearchGames.length:stateGames.length}/>



        </>
    )
}

export default Home