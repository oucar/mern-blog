import Header from "../../header/Header"
import Sidebar from "../../sidebar/Sidebar";
import Posts from "../../posts/Posts";
import "./home.scss"

const Home = () => {
    return ( 
        <>
            <Header/>
            <div className="home">
                <Posts/>
                <Sidebar/>
            </div>
        </>
     );
}
 
export default Home;