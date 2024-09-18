import './scroll.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Data from '../../data.js'
const Year = () => {
    const years = [...new Set(Data.map(car => car.year))];
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của dropdown
    const [selectedYears, setSelectedYears] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleYearChange = (year) => {
        setSelectedYears(prev =>
        prev.includes(year)
            ? prev.filter(y => y !== year) // Bỏ chọn nếu đã có
            : [...prev, year] // Thêm năm nếu chưa có
        );
    };
    return <>
    <div>
      {/* Nút bấm dropdown, hiển thị mũi tên */}
      <div className="scrollBtn">
        <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}>
          <div className="inBtn">
            Select Year
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              style={{ transition: 'transform 0.3s ease' }}
            />
          </div>
        </button>
      </div>

      {/* Danh sách các năm với checkbox, chỉ hiển thị khi dropdown mở */}
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="scroll">
          {years.map((year) => (
            <li key={year}  className="scrollChild">
              <label>
                {year}
              </label>
              <input
                  type="checkbox"
                  checked={selectedYears.includes(year)}
                  onChange={() => handleYearChange(year)}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Hiển thị các năm đã chọn */}
      {selectedYears.length > 0 && (
        <div>
          <h4>Selected Years:</h4>
          <ul>
            {selectedYears.map((year) => (
              <li key={year}>{year}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
}
export default Year