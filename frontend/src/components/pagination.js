import React from 'react'

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = []

  for(let i=0; i <Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i)
  }
  return (
    <div className='flex'>
      <ul className="pagination">
        {pageNumbers.map(pageNum => (
        <li key={pageNum}>
          <a href="#!" className="page-link" onClick={(pageNum) => paginate(pageNum)}>{pageNum}</a>
        </li>)
      )}
      </ul>
    </div>
  )
}

