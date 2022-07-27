import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const GameCard = (props) => {
    // const dispatch = useDispatch()
    return(
        <div>
        <Link to={`/videogame/${props.id}`}><h2>{props.name}</h2></Link>
        <h4>{props.rating}</h4>
         {props.genres?.map(d => <span>{d.name? d.name: d}/</span>)}
        
        <img src={props.image} alt={props.name}></img>
        </div>
    )
}
export default GameCard