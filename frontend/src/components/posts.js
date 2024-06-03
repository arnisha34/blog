import { useState } from "react"
import { Pagination } from "./pagination"
import { useContext } from "react"
import { PostsContext } from "../context/postsContext"
import { Link } from "react-router-dom"

export const Posts = () => {

  const ctx = useContext(PostsContext)

  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage] = useState(12)

  // const lastPostsIndex = currentPage * postsPerPage
  // const firstPostsIndex = lastPostsIndex - postsPerPage
  // const currPosts = ctx.postsData.slice(firstPostsIndex, lastPostsIndex)
  
  // const paginate = (pageNum) => setCurrentPage(pageNum)

  return (
    <section id="posts" className="justify-between px-6 gap-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {ctx.postsData.map(post => {
        return(
          <Link to={`/post/${post._id}`} key={post._id}>
            <article id={post._id} className="post-card flex-1">
              <div className="post_img">
                <img src={post?.img} alt="post" className="w-full min-h-[300px] max-h-[300px] object-cover object-center rounded-lg"/>
              </div>
              <div className="post_details p-4">
                <span className="post_date text-xs">{post?.date}</span>
                <h3 className="font-bold title text-xl my-2">{post?.title}</h3>
                <p className="description text-sm">{post?.text}</p>
                <span className="post_tags flex text-xs my-3">#{post?.tags.join(' #')}</span>
              </div>
            </article>
          </Link>
        )
      })}
      {/* <Pagination postsPerPage={postsPerPage} totalPosts={ctx.postsData.length} paginate={paginate}/> */}
    </section>
  )
}