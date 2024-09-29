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
import {useState} from 'react'
import Data from '../../data.js'
import CmpCard from '../card/cmpCard.jsx'
const Filter = () => {
    const [selectedYear, setSelectedYear] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedBody, setSelectedBody] = useState([]);
    const [selectedTransmission, setSelectedTransmission] = useState([]);
    const [selectedFuel, setSelectedFuel] = useState([]);
    const [selectedDrivetrain, setSelectedDrivetrain] = useState([]);
    const [selectedCapacity, setSelectedCapacity] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
  
    // Hàm để kiểm tra xem một xe có thỏa mãn tất cả các bộ lọc hay không
    const filterCars = () => {
        return Data.filter(car => {
            return (
                (selectedYear.length === 0 || selectedYear.includes(car.year)) &&
                (selectedBrand.length === 0 || selectedBrand.includes(car.brand)) &&
                (selectedBody.length === 0 || selectedBody.includes(car.bodyType)) &&
                (selectedTransmission.length === 0 || selectedTransmission.includes(car.transmission)) &&
                (selectedFuel.length === 0 || selectedFuel.includes(car.energy)) &&
                (selectedDrivetrain.length === 0 || selectedDrivetrain.includes(car.style)) &&
                (selectedCapacity.length === 0 || selectedCapacity.includes(car.seat)) &&
                (selectedColor.length === 0 || selectedColor.includes(car.color))
            );
        });
    };
  
    // Các hàm để cập nhật state của từng bộ lọc
    const handleSelectYear = (year) => setSelectedYear(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]);
    const handleSelectBrand = (brand) => setSelectedBrand(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
    const handleSelectBody = (bodyType) => setSelectedBody(prev => prev.includes(bodyType) ? prev.filter(b => b !== bodyType) : [...prev, bodyType]);
    const handleSelectTransmission = (trans) => setSelectedTransmission(prev => prev.includes(trans) ? prev.filter(t => t !== trans) : [...prev, trans]);
    const handleSelectFuel = (fuel) => setSelectedFuel(prev => prev.includes(fuel) ? prev.filter(f => f !== fuel) : [...prev, fuel]);
    const handleSelectDrivetrain = (drive) => setSelectedDrivetrain(prev => prev.includes(drive) ? prev.filter(d => d !== drive) : [...prev, drive]);
    const handleSelectCapacity = (capacity) => setSelectedCapacity(prev => prev.includes(capacity) ? prev.filter(c => c !== capacity) : [...prev, capacity]);
    const handleSelectColor = (color) => setSelectedColor(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);

    // Lấy danh sách các xe đã lọc
    const filteredCars = filterCars();
    return <>
        <div className="filterContainer">
            <h3>Filter</h3>
            <div className="filters">
                <div className="filterLine"></div>
                <div className="filterSearch">
                    <CiSearch style={{fontSize:"25px",fontWeight:"bold",position:"absolute",paddingLeft:"3%"}}></CiSearch>
                    <input type="text" placeholder="Search"></input>
                </div>
                <Year selectedYear={selectedYear} handleSelectYear={handleSelectYear} />
                <Brand selectedBrand={selectedBrand} handleSelectBrand={handleSelectBrand} />
                <Body selectedBody={selectedBody} handleSelectBody={handleSelectBody} />
                <Transmission selectedTransmission={selectedTransmission} handleSelectTransmission={handleSelectTransmission} />
                <Fuel selectedFuel={selectedFuel} handleSelectFuel={handleSelectFuel} />
                <Drivetrain selectedDrivetrain={selectedDrivetrain} handleSelectDrivetrain={handleSelectDrivetrain} />
                <Capacity selectedCapacity={selectedCapacity} handleSelectCapacity={handleSelectCapacity} />
                <Color selectedColor={selectedColor} handleSelectColor={handleSelectColor} />
            </div>
            <div className="filterClass">
                <FilterRange></FilterRange>
            </div>
            <div className="filtersBtn">
                <button type="reset" onClick={() => {
                    setSelectedYear([]);
                    setSelectedBrand([]);
                    setSelectedBody([]);
                    setSelectedTransmission([]);
                    setSelectedFuel([]);
                    setSelectedDrivetrain([]);
                    setSelectedCapacity([]);
                    setSelectedColor([]);
                }}><p>Reset filter</p></button>
            </div>
            {/* <div className="filteredCars">
                {filteredCars.length > 0 ? (
                    filteredCars.map(car => <CmpCard key={car.id} car={car} />)
                ) : (
                    <p>No cars match the selected filters</p>
                )}
            </div> */}
        </div>
    </>
}
export default Filter