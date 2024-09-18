import './scroll.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Data from '../../data.js'
const Fuel = () => {
    const fuel = [...new Set(Data.map(car => car.energy))];
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của dropdown
    const [selectedFuel, setSelectedFuel] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleFuelChange = (fuel) => {
        setSelectedFuel(prev =>
        prev.includes(fuel)
            ? prev.filter(y => y !== fuel) // Bỏ chọn nếu đã có
            : [...prev, fuel] // Thêm năm nếu chưa có
        );
    };
    return <>
    <div>
      {/* Nút bấm dropdown, hiển thị mũi tên */}
      <div className="scrollBtn">
        <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }} >
          <div className="inBtn">
            Select Fuel
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              style={{  transition: 'transform 0.3s ease' }}
            />
          </div>
        </button>
      </div>

      {/* Danh sách các năm với checkbox, chỉ hiển thị khi dropdown mở */}
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}  className="scroll">
          {fuel.map((fuel) => (
            <li key={fuel} className="scrollChild">
              <label>
                {fuel}
              </label>
              <input
                  type="checkbox"
                  checked={selectedFuel.includes(fuel)}
                  onChange={() => handleFuelChange(fuel)}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Hiển thị các năm đã chọn */}
      {selectedFuel.length > 0 && (
        <div>
          <h4>Selected Fuel:</h4>
          <ul>
            {selectedFuel.map((fuel) => (
              <li key={fuel}>{fuel}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
}
export default Fuel