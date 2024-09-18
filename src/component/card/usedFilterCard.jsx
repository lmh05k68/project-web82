import Data from '../../data.js'
import './newFilterCard.css'
import { FaCalendarAlt } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { RiGasStationLine } from "react-icons/ri";
import { RiParentLine } from "react-icons/ri";
import Star from '../../component/star/star.jsx'
import Detail from '../detail/detail.jsx'
import {Link} from 'react-router-dom'
const UsedFilterCard = () => { 
    return <>
        <div className="cardFilter">
            {Data.slice(6,10).map((car) => (
                <Link to={`/car/${car.id}`} key={car.id} style={{color:"white",textDecoration:"none"}}>
                    <div key={car.id} className="card1">
                        <img src={car.image} alt={car.name}/>
                        <div className="a">
                            <div className="state">
                                <p>{car.state}</p>
                            </div>
                            <h2 className="b">{car.name}</h2>
                            <h2 style={{color:"#007CC7",paddingBottom:"3%"}}>{car.price}</h2>
                            <p style={{paddingBottom:"3%"}}>{car.place}</p>
                            <div className="c">
                                <div className="d">
                                    <FaCalendarAlt style={{color:"#007CC7",paddingRight:"10px"}}></FaCalendarAlt>
                                    <p>{car.year}</p>
                                </div>
                                <div className="d">
                                    <TbSteeringWheel style={{color:'#007CC7',paddingRight:"10px"}}></TbSteeringWheel>
                                    <p>{car.style}</p>
                                </div>
                            
                                <div className="d">
                                    <RiGasStationLine style={{color:'#007CC7',paddingRight:"10px"}}></RiGasStationLine>
                                    <p>{car.energy}</p>
                                </div>
                                <div className="d">
                                    <RiParentLine style={{color:'#007CC7',paddingRight:"10px"}}></RiParentLine>
                                    <p>{car.seat}</p>
                                </div>
                            </div>
                            <div className="f"></div>
                            <div className="e">
                                <Star></Star>
                                <p>(12 Reviews)</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </>
}
export default UsedFilterCard