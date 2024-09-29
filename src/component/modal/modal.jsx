import React from 'react';
import './modal.css'; // Tạo file CSS cho modal
import CmpCard from '../card/cmpCard.jsx'
import {Link} from 'react-router-dom'
const Modal = ({car, onClose }) => {
    if (!car) return null;

    return (
        <div className="modalOverlay">
                <span className="closeButton" onClick={onClose}>×</span>
                <Link to="/car/:id"><CmpCard car={car}></CmpCard></Link>
        </div>
    );
};

export default Modal;