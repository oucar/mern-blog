import Sidebar from "../../sidebar/Sidebar";
import SinglePost from "../../singlePost/SinglePost";
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