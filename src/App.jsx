import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {

  return (
    <>
      <div className="container mx-auto">
        <div className="mx-4">
          <Header />
          <div className="md:flex">
            <Blogs />
            <Bookmarks />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
