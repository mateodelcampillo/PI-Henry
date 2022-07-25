import './App.css';
import React, { useEffect } from "react"
import { Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import { useDispatch } from 'react-redux';
import { getAllGames } from './redux/actions';

import GameDetail from "./components/GameDetail/GameDetail"
// import CreateVideoGame from "./components/CreateVideoGame/CreateVideoGame"


function App() {
 const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(getAllGames())
    }, [])
    
  return (
    <>
    <Nav/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/videogame/:id" component={GameDetail}/>
    {/* <Route exact path="/videogames/create" component={CreateVideoGame}/> */}
    </>
  );
}

export default App;
