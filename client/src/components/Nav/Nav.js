import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getDetailGame } from "../../redux/actions"


const Nav = ()=>{
   const dispatch = useDispatch()
    
    return(
        <>
        <></>
        <div>
            <a onClick={(e)=> {
                e.preventDefault()
                dispatch(getDetailGame())}}><Link to="/home" >Home </Link></a>
            <Link to="/">Landing</Link>
            <a onClick={(e)=> {
                e.preventDefault()
                dispatch(getDetailGame())}}><Link to="/videogames/create" >Create Game </Link></a>
        </div>

        </>
    )
}

export default Nav