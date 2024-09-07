import './header.css'
import {Link} from 'react-router-dom'
const Header = () =>{
    return <>
    <Header className="headerContainer">
        <img src="logo.png"></img>
        <Link to="/newCars" className="headerList">New cars</Link>
        <div className="headerList">Used cars</div>
        <div className="headerList">Compare</div>
        <div className="headerList">Sell</div>
        <div className="headerList">Article</div>
        <div className="headerList">Sign In</div>
        <div className="headerList">EN</div>
    </Header>
    </>
}
export default Header