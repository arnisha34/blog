
export const Posts = ({data}) => {
  return (
    <section id="posts">
      {data.map(post => {
        return(
          <article key={post._id} className="post flex">
            <div className="post_img">
              <img src={post.img} alt="post"/></div>
            <div className="post_details">
              <span className="post_date">{post.date}</span>
              <h3 className="title text-xl">{post.title}</h3>
              <p className="text">{post.text}</p>
              <span className="post_tags">{post.tags}</span>
            </div>
          </article>
        )
      })}
    </section>
  )
}