import React from 'react'
import videoLanding from "../../img/Landing.mp4"
import estilo from "../Landing/Landing.module.css"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <>
      <video className={estilo.videoLanding} autoPlay loop muted>
        <source src={videoLanding} type="video/mp4" />
      </video>
      <h1 className={estilo.title}>
        VIDEOGAMES
      </h1>
      <a className={estilo.a}><Link className={estilo.aLink} to="/home">
                            ENTER
                        </Link>  </a>
                        
    </>
  )
}
