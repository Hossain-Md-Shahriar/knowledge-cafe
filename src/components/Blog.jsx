import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="py-7 border-b-2">
      <img className="w-full rounded-lg" src={cover} alt="" />
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-6">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">{reading_time} min read</span>
          <button onClick={() => handleBookmarks(title)} className="text-2xl">
            <BsBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="space-x-4 my-5">
        {hashtags.map((hash, idx) => (
          <span key={idx}>#{hash}</span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-violet-700 text-xl font-semibold underline"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
