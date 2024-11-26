import React, { useEffect, useState } from 'react';
import DataModal from '../DataModal/DataModal';

const DisplayDataButton = () => {
    const [userData, setUserData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('userData');
        if (data) {
            console.log('Data loaded:', JSON.parse(data)); // Debug log
            setUserData(JSON.parse(data));
        }
    }, []);

    const handleOpenModal = () => {
        console.log('Opening modal'); // Debug log
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log('Closing modal'); // Debug log
        setIsModalOpen(false);
    };

    if (!userData) {
        return <button>No data available</button>;
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Display Data</button>
            <DataModal isOpen={isModalOpen} onClose={handleCloseModal} userData={userData} />
        </div>
    );
};

export default DisplayDataButton;
