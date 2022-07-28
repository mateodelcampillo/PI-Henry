import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailGame } from '../../redux/actions'

export default function GameDetail(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getDetailGame(props.match.params?.id))
},[])
  const gameDetail = useSelector(state => state.gameDetail)
 
    return (
   <>
   
   
   <h1>{gameDetail.name}</h1>
   <br/>
   <h3>{gameDetail.description}</h3>
   {gameDetail.genres?.map(d => <span>{d.name? d.name: d} </span>)}
   <br/><span>{gameDetail.rating}</span>
   <img src={gameDetail.image}></img><br /> 

  
   </>
  )
}
