import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            {pageNumbers.map(number => (
               <li key={number}>
                  <span><a onClick={(e) =>{
                        e.preventDefault()
                        paginate(number)}} href='!#'>{number}</a></span>
                       
                </li> 
            ))}
        </div>
    )
}
