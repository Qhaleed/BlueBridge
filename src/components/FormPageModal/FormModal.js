import React, { useState } from 'react';
import "./FormPage.css";

const FormModal = ({ isOpen, onClose }) => {
    const [event, setEvent] = useState('');
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [facebook, setFacebook] = useState('');
    const [error, setError] = useState('');
    const [volunteers, setVolunteers] = useState([]);

    const handleAddVolunteer = () => {
        if (!name || !occupation || !contactNumber || !email || !facebook) {
            setError('All volunteer fields are required.');
            return;
        }

        setVolunteers([...volunteers, { name, occupation, contactNumber, email, facebook }]);
        setName('');
        setOccupation('');
        setContactNumber('');
        setEmail('');
        setFacebook('');
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!event || volunteers.length === 0) {
            setError('Event and at least one volunteer are required.');
            return;
        }

        const userData = { event, volunteers };
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('User data saved to local storage');
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
                    <h3>Add Volunteers</h3>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Occupation:
                        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                    </label>
                    <label>
                        Contact Number:
                        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Facebook:
                        <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                    </label>
                    <button type="button" onClick={handleAddVolunteer}>Add Volunteer</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormModal;
