import './scroll.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Data from '../../data.js'
const Body = () =>{
    const body = [...new Set(Data.map(car => car.bodyType))];
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của dropdown
    const [selectedBody, setSelectedBody] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleBodyChange = (body) => {
        setSelectedBody(prev =>
        prev.includes(body)
            ? prev.filter(y => y !== body) // Bỏ chọn nếu đã có
            : [...prev, body]
        );
    };
    return <>
    <div>
      {/* Nút bấm dropdown, hiển thị mũi tên */}
      <div className="scrollBtn">
        <button onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center' }}>
          <div className="inBtn">
            Select Body Types
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              style={{ transition: 'transform 0.3s ease' }}
            />
          </div>
        </button>
      </div>
      {isOpen && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="scroll">
          {body.map((body) => (
            <li key={body} className="scrollChild">
              <label>
                {body}
              </label>
              <input
                  type="checkbox"
                  checked={selectedBody.includes(body)}
                  onChange={() => handleBodyChange(body)}
              />
            </li>
          ))}
        </ul>
      )}
      {selectedBody.length > 0 && (
        <div>
          <h4>Selected Body Types:</h4>
          <ul>
            {selectedBody.map((body) => (
              <li key={body}>{body}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
}
export default Body