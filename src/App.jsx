import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);

  const handleBookmarks = (title) => {
    setBookmarks([...bookmarks, title]);
  };

  const handleMarkAsRead = (readingTime) => {
    setTime(time + readingTime);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="mx-4">
          <Header />
          <div className="md:flex md:gap-4">
            <Blogs
              handleBookmarks={handleBookmarks}
              handleMarkAsRead={handleMarkAsRead}
            />
            <Bookmarks bookmarks={bookmarks} time={time} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
