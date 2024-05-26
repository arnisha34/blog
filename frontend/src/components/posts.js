
export const Posts = () => {
  return (
    <section id="posts">
      <article className="post">
        <div className="post_img"></div>
        <div className="post_details">
          <span className="post_date"></span>
          <h3 className="title text-xl">Sample title</h3>
          <p className="text">This is sample text</p>
          <span className="post_tags"></span>
        </div>
      </article>
    </section>
  )
}