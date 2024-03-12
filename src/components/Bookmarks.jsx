import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, time }) => {
  return (
    <div className="md:w-1/3 mt-7">
      <p className="text-center text-violet-700 text-2xl font-bold py-5 px-2 bg-violet-100 border-2 border-violet-700 mb-6 rounded-lg">
        Spent time on read : {time} min
      </p>
      <div className="bg-gray-300 p-7 rounded-lg">
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div>
          {bookmarks.map((bookmark, idx) => {
            return <Bookmark key={idx} bookmark={bookmark} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
