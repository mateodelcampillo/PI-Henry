import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import estilo from "./GameCard.module.css"
const GameCard = (props) => {
    // const dispatch = useDispatch()
    return (
        <Link to={`/videogame/${props.id}`}>
            <div className={estilo.card}>


                <div className={estilo.cardBody}>
                    <img className={estilo.img} src={props.image} alt={props.name} />
                    <h2 className={estilo.cardTitle}>{props.name}</h2>
                    <p className={estilo.cardDescription}>{props.rating}</p>
                    {props.genres?.map(d => <span key={d.name ? d.name : d} className={estilo.cardDescription}>{d.name ? d.name : d}/</span>)}
                </div>
                <button className={estilo.cardButton}>Detail</button>

            </div></Link>
    )
}
export default GameCard

