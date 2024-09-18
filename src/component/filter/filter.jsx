import './filter.css'
import Year from './year.jsx'
import Brand from './brand.jsx'
import Body from './body.jsx'
import Transmission from './transmission.jsx'
import Fuel from './fuel.jsx'
import Drivetrain from './drivetrain.jsx'
import Capacity from './capacity.jsx'
import Color from './color.jsx'
import FilterRange from './filterRange/filterRange.jsx'
import { CiSearch } from "react-icons/ci";
const Filter = () => {
    return <>
        <div className="filterContainer">
            <h3>Filter</h3>
            <div className="filters">
                <div className="filterLine"></div>
                <div className="filterSearch">
                    <CiSearch style={{fontSize:"25px",fontWeight:"bold",position:"absolute",paddingLeft:"3%"}}></CiSearch>
                    <input type="text" placeholder="Search"></input>
                </div>
                <Year></Year>
                <Brand></Brand>
                <Body></Body>
                <Transmission></Transmission>
                <Fuel></Fuel>
                <Drivetrain></Drivetrain>
                <Capacity></Capacity>
                <Color></Color>
            </div>
            <div className="filterClass">
                <FilterRange></FilterRange>
            </div>
            <div className="filtersBtn">
                <button type="reset"><p>Reset filter</p></button>
            </div>
        </div>
    </>
}
export default Filter