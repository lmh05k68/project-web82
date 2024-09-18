import './header.css'
import {Link} from 'react-router-dom'
const Header = () =>{
    return <>
    <header className="headerContainer">
        <Link to="/"><img src="/logo.png"></img></Link>
        <Link to="/newCars" className="headerList">New cars</Link>
        <Link to="/usedCars" className="headerList">Used cars</Link>
        <Link to="/cmp" className="headerList">Compare</Link>
        <Link to="/sell" className="headerList">Sell</Link>
        <div className="headerList">Article</div>
        <div className="headerList">Sign In</div>
        <div className="headerList">EN</div>
    </header>
    </>
}
export default Header