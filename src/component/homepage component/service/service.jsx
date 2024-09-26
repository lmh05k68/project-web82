import './service.css'
import { IoCarSportOutline } from "react-icons/io5";
import { IoCar } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import {Link} from 'react-router-dom'
const Service = () => {
    return <>
        <div className="serviceContainer">
            <h2>Our services</h2>
            <Link to="/newCars" className="serviceCard">
                <div className="serviceChild">
                    <IoCarSportOutline className="serviceIcon"></IoCarSportOutline>
                    <p>Buy a new car</p>
                </div>
                <Link to="/usedCars" className="serviceChild">
                    <IoCar className="serviceIcon"></IoCar>
                    <p>Buy an used car</p>
                </Link>
                
                    <Link to="/sell" className="serviceChild">
                        <MdOutlineSell className="serviceIcon"></MdOutlineSell>
                        <p>Sell my car</p>
                    </Link>
                
            </Link>
        </div>
    </>
}
export default Service