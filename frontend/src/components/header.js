import { useContext } from "react"
import { PostsContext } from "../context/postsContext"
import { Link } from "react-router-dom"

export const Header = ({featuredPostID}) => {

  const ctx = useContext(PostsContext)

  const featuredPost = ctx.postsData.find(post => post._id === featuredPostID)

  return (
    <header className="bg-[url('./images/header-bg.jpg')] bg-center bg-cover mb-20 w-full min-h-[700px] max-h-[700px] flex justify-center items-center">
       <div id="featured" className="bg-white flex flex-col justify-center items-center opacity-75 p-12 w-1/2 h-1/2">
        <span className="category text-sm uppercase my-4">Category goes here</span>
          <h1 className="font-light mb-4 text-5xl italic">{featuredPost?.title}</h1>
          <p className="mb-6">{featuredPost?.text.slice(0,50) + '...'}</p>
          <Link to={`/post/${featuredPost?._id}`} className="border border-solid border-pink-300 hover:bg-pink-300 hover:text-white text-sm tracking-wide px-6 py-2 uppercase">Read Article</Link>
       </div>
    </header>
  )
}