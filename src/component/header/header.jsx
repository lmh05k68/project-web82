import './header.css'
import {Link} from 'react-router-dom'
import {useUserContext} from '../context/UserContext.jsx'
const Header = () =>{
    const { user } = useUserContext();
    return <>
    <header className="headerContainer">
        <Link to="/"><img src="/logo.png"></img></Link>
        <Link to="/newCars" className="headerList">New cars</Link>
        <Link to="/usedCars" className="headerList">Used cars</Link>
        <Link to="/cmp" className="headerList">Compare</Link>
        <Link to="/sell" className="headerList">Sell</Link>
        <Link to="/chart" className="headerList">Chart</Link>
        {user.name ? (
                <div className="headerList">{user.name}</div>
            ) : (
                <Link to="/login" className="headerList">Sign In</Link>
            )}
        <div className="headerList">EN</div>
    </header>
    </>
}
export default Header