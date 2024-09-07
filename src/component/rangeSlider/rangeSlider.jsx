import './rangeSlider.css'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider'
import { useState } from 'react'
const RangeSlider = () => {
    const [range, setRange] = useState([0, 3000000]);
    const handleChange = (newRange) => {
        setRange(newRange);
    }
    return <>
    <div className="rangeSlider">
        <div className="range">
            <h3>Price range</h3>
            <div>${range[0]} - ${range[1]}</div>
        </div>
        <Slider
                range
                min={0}
                max={3000000.00}
                step={1}
                value={range}
                onChange={handleChange}
                track={[{ backgroundColor: '#152836' }]} // Màu của thanh trượt
                rail={{ backgroundColor: '#bbb' }} // Màu của đường ray
                handleColor={[
                { borderColor: '#0056b3', backgroundColor: '#007bff' }, // Màu của tay cầm
                { borderColor: '#0056b3', backgroundColor: '#007bff' } // Màu của tay cầm
                ]}
                tipFormatter={(value) => `$${value}`} // Định dạng của tooltip
                allowCross={false} // Ngăn chặn tay cầm vượt qua nhau
        />
    </div> 
    </>
}
export default RangeSlider