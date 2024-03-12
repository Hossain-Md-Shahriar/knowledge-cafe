import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 mt-7">
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
