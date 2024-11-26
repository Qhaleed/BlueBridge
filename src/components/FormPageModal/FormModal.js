import React, { useState } from 'react';
import "./FormPage.css";

const FormModal = ({ isOpen, onClose, onSubmit }) => {
    const [event, setEvent] = useState('');
    const [Name, setName] = useState('');
    const [Occupation, setOccupation] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [Facebook, setFacebook] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        event.preventDefault();
        if (!event || !Name || !Occupation || !ContactNumber || !Email || !Facebook) {
            setError('All fields are required.');
            return;
        }

        setError('');
        onSubmit({ event, Name: Name, Occupation: Occupation, contactNumber: ContactNumber, Email: Email, Facebook: Facebook });
        alert('user added');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                <form onSubmit={handleSubmit}>
                    <h2>Create Event</h2>
                    {error && <p className="error">{error}</p>}
                    <label>
                        Name:
                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Event:
                        <input type="text" value={event} onChange={(e) => setEvent(e.target.value)} />
                    </label>
                    <label>
                        Contact Number Amount:
                        <input type="number" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                    </label>
                    <label>
                        Occupation:
                        <input type="number" value={Occupation} onChange={(e) => setOccupation(e.target.value)} />
                    </label>
                    <label>
                        Email
                        <input type="number" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Facebook:
                        <textarea value={Facebook} onChange={(e) => setFacebook(e.target.value)}></textarea>
                    </label>
                    <button type="submit"> Submit </button>
                </form>
            </div>
        </div>
    );
};

export default FormModal;
