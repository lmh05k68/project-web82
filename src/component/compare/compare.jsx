import CompareCard from '../../component/card/compareCard.jsx'
import './compare.css'
const Compare = () => {
    return <>
        <div className="compareContainer">
            <h2>Compare cars</h2>
            <div className="compareChild">
                <div className="vs"><h1>VS</h1></div>
                <CompareCard></CompareCard>
            </div>
            <button>Compare Cars</button>
        </div>    
    </>
}
export default Compare