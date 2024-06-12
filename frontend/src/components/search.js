import React, { useState } from 'react'
import { useContext } from 'react'
import { PostsContext } from '../context/postsContext'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const Search = () => {

  const [active, setActive] = useState(false)

  const ctx = useContext(PostsContext)

  const handleChange = (e) => {
    e.preventDefault()
    if(e.target.value === ""){
      ctx.setPostsData(ctx.postsData)
    }else {
      let searchResults = ctx.postsData.filter(result => result.title.toLowerCase().includes(e.target.value.toLowerCase()))
      ctx.setPostsData(searchResults)
    }
  }
  
  return (
    <div id="navbar-search" className='flex items-center'>
      <MagnifyingGlassIcon className={`size-6 ${active === true ? "hidden":"block"} cursor-pointer`} onClick={() => setActive(!active)}/>
      <div id="search" className={`${active === false ? "hidden":"block"}`} onMouseLeave={() => setActive(false)}>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
          <input className="placeholder:italic placeholder:text-slate-500 placeholder:uppercase placeholder:text-xs block bg-white w-full border border-black rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search Articles..." type="text" name="search" onChange={(e) => handleChange(e)}/>
        </label>
      </div>
    </div>
  )
}
