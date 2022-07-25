import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const GameCard = (props) => {
    // const dispatch = useDispatch()
    return(
        <div>
        <Link to={`/videogame/${props.id}`}><h2>{props.name}</h2></Link>
        <h4>{props.rating}</h4>
        {props.genres.map(g => <h4>{g}</h4>)}
        <img src={props.image} alt={props.name}></img>
        </div>
    )
}
export default GameCard