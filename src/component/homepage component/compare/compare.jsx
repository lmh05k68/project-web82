import CompareCard from '../../card/compareCard.jsx'
import {Link} from 'react-router-dom'
import './compare.css'
const Compare = () => {
    return <>
        <div className="compareContainer">
            <h2>Compare cars</h2>
            <div className="compareChild">
                <div className="vs"><h1>VS</h1></div>
                <CompareCard></CompareCard>
            </div>
            <Link to="/cmp"><button>Compare Cars</button></Link>
        </div>    
    </>
}
export default Compare