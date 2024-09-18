import './scroll.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Data from '../../data.js'
const Capacity = () =>{
    const capacity = [...new Set(Data.map(car => car.seat))];
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của dropdown
    const [selectedCapacity, setSelectedCapacity] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleCapacityChange = (passenger) => {
        setSelectedCapacity(prev =>
        prev.includes(passenger)
            ? prev.filter(y => y !== passenger) // Bỏ chọn nếu đã có
            : [...prev, passenger]
        );
    };
    return <>
    <div>
      {/* Nút bấm dropdown, hiển thị mũi tên */}
      <div className="scrollBtn">
        <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}>
          <div className="inBtn">
            Select Passenger Capacity
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              style={{transition: 'transform 0.3s ease' }}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="scroll">
          {capacity.map((passenger) => (
            <li key={passenger} className="scrollChild">
              <label>
                {passenger}
              </label>
              <input
                  type="checkbox"
                  checked={selectedCapacity.includes(passenger)}
                  onChange={() => handleCapacityChange(passenger)}
              />
            </li>
          ))}
        </ul>
      )}
      {selectedCapacity.length > 0 && (
        <div>
          <h4>Selected Passenger Capacity:</h4>
          <ul>
            {selectedCapacity.map((capacity) => (
              <li key={capacity}>{capacity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
}
export default Capacity