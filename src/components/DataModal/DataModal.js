import React from 'react';
import "./DataModal.css"; // Create a CSS file for styling

const DataModal = ({ isOpen, onClose, userData }) => {
    console.log('Modal open state:', isOpen); // Debug log
    console.log('User data in modal:', userData); // Debug log

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Event Volunteers</h2>
                <p><strong>Volunteer Name:</strong> {userData.name}</p>
            </div>
        </div>
    );
};

export default DataModal;
