import "./navbar.scss"

const Navbar = () => {
    return (  
        <div className="navbar">
            {/* Social Media */}
            <div className="topLeft">
                <i className="fab fa-linkedin-in topIcon"></i>
                <i className="fab fa-instagram topIcon"></i>
                <i className="fab fa-github topIcon"></i>
                <i className="fas fa-at topIcon"></i>
            </div>
            <div className="topCenter">
                <div className="topList">
                    <li className="topListItem">home</li>
                    <li className="topListItem">about</li>
                    <li className="topListItem">contact</li>
                    <li className="topListItem">post</li>
                    <li className="topListItem">login/logout</li>
                </div>
            </div>
            <div className="topRight">
                <img src="" className="topImage" alt="Profile Picture" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
 
export default Navbar;