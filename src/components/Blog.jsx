const Blog = ({blog}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

  return (
    <div className="py-7 border-b-2">
        <img className="w-full" src={cover} alt="" />
        <div className="flex justify-between items-center my-5">
            <div className="flex gap-6">
                <img className="w-16" src={author_img} alt="" />
                <div>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
            </div>
        </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="space-x-4 my-5">
        {
            hashtags.map((hash, idx) => <span key={idx}>#{hash}</span>)
        }
      </p>
    </div>
  )
}

export default Blog
