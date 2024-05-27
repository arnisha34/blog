
export const Posts = ({data}) => {
  return (
    <section id="posts" className="grid grid-cols-4 grid-flow-col gap-4 px-6">
      {data.map(post => {
        return(
          <article key={post._id} className="post-card border">
            <div className="post_img">
              <img src={post.img} alt="post" className="min-w-[100%] object-cover object-center"/></div>
            <div className="post_details p-4">
              <span className="post_date text-sm">{post.date}</span>
              <h3 className="title font-serif italic text-2xl">{post.title}</h3>
              <p className="text">{post.text}</p>
              <span className="post_tags flex">{post.tags}</span>
            </div>
          </article>
        )
      })}
    </section>
  )
}