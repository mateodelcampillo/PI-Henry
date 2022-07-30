import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { gamesFilter, getAllGames, getDetailGame, getSearchGames, getSortGames } from "../../redux/actions"
import estilo from "./Home.module.css"
import GameCard from "../GameCard/GameCard"
import { Pagination } from "./Pagination"
import { Link } from "react-router-dom"
import logo from "../../img/logo.png"
const Home = () => {



    /////////////         DISPATCH Y ESTADO GLOBAL         ///////////////





    const dispatch = useDispatch()
    const stateGames = useSelector(state => state.gamesView)
    const stateSearchGames = useSelector(state => state.searchGame)
    const stateFilterGames = useSelector(state => state.filterGames)




    /////////////         ESTADOS LOCALES         ///////////////




    const [game, setGame] = useState([])
    const [copyGames, setCopyGames] = useState()
    const [originalCopy, setOriginalCopy] = useState()
    const [sortGame, setUpdate] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(15)
    const [reset, setReset] = useState()



    //  Current Posts



    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = Object.keys(stateSearchGames).length > 0 ? [...stateSearchGames?.slice(indexOfFirstPost, indexOfLastPost)] : [...stateGames?.slice(indexOfFirstPost, indexOfLastPost)]



    /////////////         CAMBIAR DE PAGINA       ///////////////



    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    let handleOnChange = (e) => {
        setGame(e.target.value)
    }



    /////////////         FILTRO DE ORDEN ALFABETICO         ///////////////




    const FilterAbc = (e) => {
        if (e.target.value === "A-Z") {
            function sort(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }


            const gamesSort = stateGames.sort(sort)
            dispatch(getSortGames(gamesSort))
            setUpdate("Orden A-Z")
        }
        else if (e.target.value === "Z-A") {
            function sort(x, y) {
                if (x.name < y.name) { return 1; }
                if (x.name > y.name) { return -1; }
                return 0;
            }


            const gamesSort = stateGames.sort(sort)
            dispatch(getSortGames(gamesSort))
            setUpdate("Orden Z-A")
        }

    }



    /////////////         FILTRO DE RATING        ///////////////




    const FilterRating = (e) => {
        if (e.target.value === "Best Rated") {
            function sort(x, y) {
                if (x.rating < y.rating) { return 1; }
                if (x.rating > y.rating) { return -1; }
                return 0;
            }
            const gamesSort = stateGames.sort(sort)

            dispatch(getSortGames(gamesSort))
            setUpdate("ORDEN BEST RATED")
        }
        else if (e.target.value === "Worst Rated") {
            function sort(x, y) {
                if (x.rating < y.rating) { return -1; }
                if (x.rating > y.rating) { return 1; }
                return 0;
            }

            const gamesSort = stateGames.sort(sort)

            dispatch(getSortGames(gamesSort))
            setUpdate("ORDEN WORST RATED")
        }

    }

    const FilterPlatform = (e) => {
        console.log("Siuu", e.target.value)

        const gamesPf = stateGames.filter(d => d.genres.includes(e.target.value))
        console.log("Siuu", gamesPf)

        dispatch(gamesFilter(gamesPf))
        setUpdate("ORDEN PF")
    }

    return (
        <div className={estilo.body}>

            <div className={estilo.nav}>
                <img className={estilo.logo} src={logo} ></img>
                <div className={estilo.navButton}>
                    <a className={estilo.a} onClick={(e) => {
                        e.preventDefault()
                        dispatch(getDetailGame())
                    }}><Link to="/home"  className={estilo.link}>Home </Link></a>

                    <a className={estilo.a} onClick={(e) => {
                        e.preventDefault()
                        dispatch(getDetailGame())
                    }}><Link to="/videogames/create" className={estilo.link}>Create Game </Link></a>
                </div>
                {console.log(stateGames)}



                {/*       FORMULARIO DE BUSQUEDA       */}



                <form onSubmit={(e) => {
                    e.preventDefault()
                    setOriginalCopy(stateGames)
                    dispatch(getSearchGames(game))
                    setGame("")


                }}>
                    <input className={estilo.inputSearch} name="game" value={game} onChange={handleOnChange}></input>
                    <button type="submit">Search</button>
                </form>
                <button onClick={(e) => {
                    e.preventDefault()
                    setGame("")
                    dispatch(getAllGames())
                    setReset("Filtrar por Genero:")
                }}>Reset</button>


                {/*        ORDEN ALFABETICO            */}



                <select onChange={FilterAbc}>
                    <option>Orden Alfabetico:</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                </select>



                {/*         ORDEN POR RATING           */}



                <select onChange={FilterRating}>
                    <option>Orden por Rating:</option>
                    <option>Best Rated</option>
                    <option>Worst Rated</option>
                </select>



                {/*         ORDEN POR GENERO           */}



                <select onChange={FilterPlatform} value={reset}>
                    <option value={reset}>Filtrar por Genero:</option>
                    <option value="Action">Action</option>
                    <option value="Indie">Indie</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Racing">Racing</option>
                    <option value="Massiveley Multiplayer">Massiveley Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Family">Family</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
                </select>
            </div>

            {Object.keys(stateSearchGames).length > 0 ?
                <div className={estilo.wrapper}>
                    {currentPosts?.map(e =>

                        <GameCard
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            image={e.image}
                            genres={e.genres}
                            description={e.description}
                            releaseDate={e.releaseDate}
                            rating={e.rating} />
                    )} </div> :
                <div className={estilo.wrapper}>
                    {currentPosts?.map(e =>

                        <GameCard
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            image={e.image}
                            genres={e.genres}
                            description={e.description}
                            releaseDate={e.releaseDate}
                            rating={e.rating} />
                    )}
                </div>
            }

            <Pagination postsPerPage={postsPerPage} paginate={paginate} totalPosts={stateSearchGames.length > 1 ? stateSearchGames.length : stateGames.length} />
        </div>
    )
}

export default Home