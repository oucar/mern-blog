import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.scss"

const Single = () => {
    return ( 
        <div className="single">
            {/* POST */}
            <SinglePost/>

            {/* Sidebar */}
            <Sidebar/>
        
        </div>
     );
}
 
export default Single;