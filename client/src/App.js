import './App.css';
import React, { useEffect } from "react"
import { Route } from "react-router-dom";
import Home from "./components/Home/Home"
import { useDispatch } from 'react-redux';
import { getAllGames, getAllGenres } from './redux/actions';

import GameDetail from "./components/GameDetail/GameDetail"
import CreateGame from "./components/CreateGame/CreateGame"
import Landing from "./components/Landing/Landing.js"


function App() {
 const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(getAllGames())
    dispatch(getAllGenres())
    }, [])
    
  return (
    <>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/videogame/:id" component={GameDetail}/>
    <Route exact path="/videogames/create" component={CreateGame}/>
    </>
  );
}

export default App;
