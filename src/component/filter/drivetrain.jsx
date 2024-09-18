import './scroll.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Data from '../../data.js'
const Drivetrain = () =>{
    const drivetrain = [...new Set(Data.map(car => car.style))];
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của dropdown
    const [selectedDrive, setSelectedDrive] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleDriveChange = (drive) => {
        setSelectedDrive(prev =>
        prev.includes(drive)
            ? prev.filter(y => y !== drive) // Bỏ chọn nếu đã có
            : [...prev, drive]
        );
    };
    return <>
    <div>
      {/* Nút bấm dropdown, hiển thị mũi tên */}
      <div className="scrollBtn">
        <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}>
          <div className="inBtn">
            Select Drivetrain
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              style={{ transition: 'transform 0.3s ease' }}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="scroll">
          {drivetrain.map((drive) => (
            <li key={drive} className="scrollChild">
              <label>
                {drive}
              </label>
              <input
                  type="checkbox"
                  checked={selectedDrive.includes(drive)}
                  onChange={() => handleDriveChange(drive)}
              />
            </li>
          ))}
        </ul>
      )}
      {selectedDrive.length > 0 && (
        <div>
          <h4>Selected Drivetrain:</h4>
          <ul>
            {selectedDrive.map((drive) => (
              <li key={drive}>{drive}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
}
export default Drivetrain