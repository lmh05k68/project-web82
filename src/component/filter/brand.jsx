import './scroll.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Data from '../../data.js'
const Brand = () =>{
    const brands = [...new Set(Data.map(car => car.brand))];
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của dropdown
    const [selectedBrand, setSelectedBrand] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleBrandChange = (brand) => {
        setSelectedBrand(prev =>
        prev.includes(brand)
            ? prev.filter(y => y !== brand) // Bỏ chọn nếu đã có
            : [...prev, brand]
        );
    };
    return <>
    <div>
      {/* Nút bấm dropdown, hiển thị mũi tên */}
      <div className="scrollBtn">
        <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}>
          <div className="inBtn">
            Select Brands
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              style={{ transition: 'transform 0.3s ease' }}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="scroll">
          {brands.map((brand) => (
            <li key={brand} className="scrollChild">
              <label>
                {brand}
              </label>
              <input
                  type="checkbox"
                  checked={selectedBrand.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
              />
            </li>
          ))}
        </ul>
      )}
      {selectedBrand.length > 0 && (
        <div>
          <h4>Selected Brands:</h4>
          <ul>
            {selectedBrand.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
}
export default Brand