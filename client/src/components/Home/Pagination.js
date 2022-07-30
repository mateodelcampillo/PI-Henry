import React from 'react'
import estilo from "./Pagination.module.css"
export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className={estilo.container}>
            {pageNumbers.map(number => (
                <span key={number}>

                    <a className={estilo.button} onClick={(e) => {
                        e.preventDefault()
                        paginate(number)
                    }} href='!#'>{number}</a>


                </span>
            ))}
        </div>
    )
}
