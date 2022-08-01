import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDetailGame } from '../../redux/actions'
import estilo from "./GameDetail.module.css"
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
    <>
      <div style={{ 
      backgroundImage: `url(${gameDetail.extraImage})` 
    }}/>
      <a className={estilo.a} onClick={resetDetail}><Link to="/home">
        Home
      </Link> </a>
      <h1 className={estilo.title}>{gameDetail.name}</h1>
      <div className={estilo.detailContainer}>
        <div className={estilo.textDiv}>


          <h3>{gameDetail.description}</h3></div>

        <div>
          <img className={estilo.img} src={gameDetail.image}></img>
          {gameDetail.genres?.map(d => <p>{d.name ? d.name : d} </p>)}
          <p>{gameDetail.rating}</p></div>
      </div>

    </>
  )
}

