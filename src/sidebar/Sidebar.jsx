import "./sidebar.scss"
import onurPic from "../assets/me.JPG"

const Sidebar = () => {
    return ( 
        <div className="sidebar">

            {/* About Me */}
            <div className="sidebarItem">
                <span className="sidebarTitle">about me</span>
                <img src={onurPic} alt="Onur Ucar" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, beatae consequatur magnam distinctio aspernatur maiores harum perferendis quae autem omnis ab quos, ad quam soluta facere dolore consectetur deleniti nam.</p>
            </div>
            
            {/* Categories */}
            <div className="sidebarItem">
                <span className="sidebarTitle">categories</span>
                <ul className="sidebarList">
                        <li className="sidebarListItem">Education</li>
                        <li className="sidebarListItem">Computer Science</li>
                        <li className="sidebarListItem">Technology</li>
                        <li className="sidebarListItem">Music</li>
                    </ul>
            </div>

            {/* Follow Me */}
            <span className="sidebarTitle">follow me</span>
            <div className="sidebarSocial">
                <i className="fab fa-linkedin-in sidebarIcon"></i>
                <i className="fab fa-instagram sidebarIcon"></i>
                <i className="fab fa-github sidebarIcon"></i>
                <i className="fas fa-at sidebarIcon"></i>
            </div>


        </div>
    );
}
 
export default Sidebar;