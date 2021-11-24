import "./header.scss"

const Header = () => {
    return ( 
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">@oucar</span>
                <span className="headerTitleLarge">MERN Blog</span>
            </div>

            {/*  */}
            <img className="headerImg" 
            src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="Header Image" />
        </div>
     );
}
 
export default Header;