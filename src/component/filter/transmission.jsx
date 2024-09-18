import './scroll.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Data from '../../data.js'
const Transmission = () =>{
    const transmission = [...new Set(Data.map(car => car.transmission))];
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của dropdown
    const [selectedTransmission, setSelectedTransmission] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleTransmissionChange = (trans) => {
        setSelectedTransmission(prev =>
        prev.includes(trans)
            ? prev.filter(y => y !== trans) // Bỏ chọn nếu đã có
            : [...prev, trans]
        );
    };
    return <>
    <div>
      {/* Nút bấm dropdown, hiển thị mũi tên */}
      <div className="scrollBtn">
        <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}>
          <div className="inBtn">
            Select Transmission
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              style={{ transition: 'transform 0.3s ease' }}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="scroll">
          {transmission.map((trans) => (
            <li key={trans} className="scrollChild">
              <label>
                {trans}
              </label>
              <input
                  type="checkbox"
                  checked={selectedTransmission.includes(trans)}
                  onChange={() => handleTransmissionChange(trans)}
              />
            </li>
          ))}
        </ul>
      )}
      {selectedTransmission.length > 0 && (
        <div>
          <h4>Selected Transmission:</h4>
          <ul>
            {selectedTransmission.map((trans) => (
              <li key={trans}>{trans}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
}
export default Transmission