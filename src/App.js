import Navbar from "./components/navbar/Navbar";
import Posts from "./components/posts/Posts";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="content">
      <Navbar/>
      <Home/>
      <Posts/>
    </div>
  
  );
}

export default App;
