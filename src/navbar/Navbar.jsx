import "./navbar.css"

const Navbar = () => {
    return (  
        <div className="navbar">
            {/* Social Media */}
            <div className="topLeft">
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-github"></i>
                <i class="fas fa-at"></i>
            </div>
            <div className="topCenter">C</div>
            <div className="topRight">R</div>
        </div>
    );
}
 
export default Navbar;