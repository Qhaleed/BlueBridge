import React, { useState } from 'react';
import './EventModal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [event, setEvent] = useState('');
    const [donation, setDonation] = useState('');
    const [volunteers, setVolunteers] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!event || !donation || !volunteers || !description) {
            setError('All fields are required.');
            return;
        }
        if (volunteers > 50) {
            setError('Number of volunteers cannot exceed 50.');
            return;
        }
        setError('');
        onSubmit({ event, donation, volunteers, description });
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
                        Event:
                        <input type="text" value={event} onChange={(e) => setEvent(e.target.value)} />
                    </label>
                    <label>
                        Donation Amount:
                        <input type="number" value={donation} onChange={(e) => setDonation(e.target.value)} />
                    </label>
                    <label>
                        Number of Volunteers:
                        <input type="number" value={volunteers} onChange={(e) => setVolunteers(e.target.value)} />
                    </label>
                    <label>
                        Description:
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </label>
                    <button type="submit">Create Event</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
