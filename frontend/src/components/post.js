 import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PostsContext } from '../context/postsContext'
 
 export const Post = () => {

  const ctx = useContext(PostsContext)

  const { postId } = useParams()

  const post = ctx.postsData.find(id => id._id === postId)
    
   return (
    <article  className="post-card w-3/4 mx-auto m-12">
      <div className="post_img">
        <img src={post?.img} alt="post" className="w-full max-h-[500px] object-cover object-center rounded-lg"/>
      </div>
      <div className="post_details my-8">
        <span className="post_date text-xs">{post?.date}</span>
        <h3 className="font-bold title text-xl my-2">{post?.title}</h3>
        <p className="description text-sm">{post?.text}</p>
        <span className="post_tags flex text-xs my-3">#{post?.tags.join(' #')}</span>
      </div>
    </article>
   )
 }
 