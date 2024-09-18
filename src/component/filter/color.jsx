import './scroll.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Data from '../../data.js'
const Color = () =>{
    const color = [...new Set(Data.map(car => car.color))];
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của dropdown
    const [selectedColor, setSelectedColor] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleColorChange = (color) => {
        setSelectedColor(prev =>
        prev.includes(color)
            ? prev.filter(y => y !== color) // Bỏ chọn nếu đã có
            : [...prev, color]
        );
    };
    return <>
    <div>
      {/* Nút bấm dropdown, hiển thị mũi tên */}
      <div className="scrollBtn">
        <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}> 
          <div className="inBtn">
            Select Exterior Color
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              style={{transition: 'transform 0.3s ease-in-out',transform:' rotate(180deg)' }}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="scroll">
          {color.map((color) => (
            <li key={color} className="scrollChild">
              <label>
                {color}
              </label>
              <input
                  type="checkbox"
                  checked={selectedColor.includes(color)}
                  onChange={() => handleColorChange(color)}
              />
            </li>
          ))}
        </ul>
      )}
      {selectedColor.length > 0 && (
        <div>
          <h4>Selected Exterior Color:</h4>
          <ul>
            {selectedColor.map((color) => (
              <li key={color}>{color}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
}
export default Color