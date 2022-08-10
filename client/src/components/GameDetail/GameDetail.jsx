import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDetailGame } from '../../redux/actions'
import estilo from "./GameDetail.module.css"
import img from "../../img/backgroundDetail2.jpg"
export default function GameDetail(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDetailGame(props.match.params?.id))
  }, [])
  const gameDetail = useSelector(state => state.gameDetail)
  const resetDetail = (e) => {
    e.preventDefault()
    dispatch(getDetailGame())
  }
  return (

    <div className={estilo.backgroundImage}>

      <a className={estilo.a} onClick={resetDetail}><Link className={estilo.aLink} to="/home">
        Home
      </Link> </a>

      <h1 className={estilo.title}>{gameDetail.name}</h1>
      <div className={estilo.detailContainer}>
        <div className={estilo.textDiv}>


          <h3>{gameDetail.description}</h3></div>

        <div>
          <div className={estilo.imageDetail}>
          <img className={estilo.img} src={gameDetail.image}></img>


          <div className={estilo.infoContent}><><p>Platforms:{gameDetail.platforms?.map(d => `  ${d} /`)}</p></></div>
          <p className={estilo.detailInfo} >Genres:</p>
          <div className={estilo.infoContent}>{gameDetail.genres?.map(d => <p>{d.name ? d.name : d} / </p>)}</div>
          <p className={estilo.infoContent} >Release date: {gameDetail.releaseDate}</p>
          <p className={estilo.infoContent} >Rating: {gameDetail.rating}</p></div></div></div>


    </div>

  )
}

