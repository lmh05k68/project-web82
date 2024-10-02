import './cmpCard.css'
import { FaCalendarAlt } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { RiGasStationLine } from "react-icons/ri";
import { RiParentLine } from "react-icons/ri";
import Star from '../../page/compare page/star/star.jsx'
import {Link} from 'react-router-dom'
const CmpCard = ({car}) => { 
    if(!car) return null
    return <>
        <div className="cardContainer">
           
                <Link to={`/car/${car.id}`} key={car.id} className="cardCmp">
                    <img src={car.image} alt={car.name}/>
                    <div className="new">
                        <p>{car.state}</p>
                    </div>
                    <h2 style={{paddingTop:"10px"}} className="carName">{car.name}</h2>
                    <h2 style={{color:"#007CC7",paddingTop:'2%'}}>{car.price}</h2>
                    <p style={{paddingTop:'5%'}}>{car.place}</p>
                    <div className="yearStyle">
                        <div className="cardIcon">
                            <FaCalendarAlt style={{paddingLeft:"15%",color:"#007CC7"}}></FaCalendarAlt>
                            <p style={{width:'100px'}}>{car.year}</p>
                        </div>
                        <div className="cardIcon">
                            <TbSteeringWheel style={{color:'#007CC7'}}></TbSteeringWheel>
                            <p style={{width:'150px'}}>{car.style}</p>
                        </div>
                    </div>
                    <div className="yearStyle">
                        <div className="cardIcon">
                            <RiGasStationLine style={{paddingLeft:"15%",color:'#007CC7'}}></RiGasStationLine>
                            <p style={{width:'100px'}}>{car.energy}</p>
                        </div>
                        <div className="cardIcon">
                            <RiParentLine style={{color:'#007CC7'}}></RiParentLine>
                            <p style={{width:'100px'}}>{car.seat}</p>
                        </div>
                    </div>
                    <div className="cardLine"></div>
                    <div className="star">
                        <Star></Star>
                        <p>(12 Reviews)</p>
                    </div>
                </Link>
        </div>
    </>
}
export default CmpCard