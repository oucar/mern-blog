import Navbar from "./components/navbar/Navbar";
import Posts from "./components/posts/Posts";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div className="content">
      <Navbar/>
      {/* <Home/> */}
      {/* <Single/> */}
      {/* <Create/> */}
      <Settings/>
    </div>
  
  );
}

export default App;
