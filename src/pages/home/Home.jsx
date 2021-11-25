import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import Single from "../single/Single";
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