import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../../components/NavigationBar/navbar";
import pic from "./ImageContainer/image.png";
import "./DonationStyleSheet.css";
import MyFooter from "../../components/Footer/Footer";
import Modal from "../../components/EventModal/EventModal";
import FormModal from "../../components/FormPageModal/FormModal";

export const DonationPage = () => {
    // State for managing modals
    const [isFormModalOpen, setFormModalOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    // Initialize the target donation amount (e.g., goal is Php 20,000)
    const targetDonationAmount = 20000;

    // Initialize events data with a sample event
    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem('events');
        return savedEvents ? JSON.parse(savedEvents) : [
            { event: "Barangay Pasonanca Fire Relief", Name: "Maria Donicia Solomon", description: "Help those affected by the fire in Barangay Pasonanca.", currentDonation: 15000 },
            { event: "Typhoon Relief Drive", Name: "Juan dela Cruz", description: "Assisting typhoon victims in Zamboanga.", currentDonation: 5000 }
        ];
    });

    // Initialize total donations (this will be dynamically updated as users donate)
    const [totalDonations, setTotalDonations] = useState(() => {
        return parseFloat(localStorage.getItem('totalDonations') || '15000'); // Start with Php 15,000 already raised
    });

    // Calculate the percentage of total donations raised
    const [percentage, setPercentage] = useState(() => {
        return (totalDonations / targetDonationAmount) * 100;
    });

    // Update local storage whenever events or donations change
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
        localStorage.setItem('totalDonations', totalDonations.toString());
        setPercentage((totalDonations / targetDonationAmount) * 100);
    }, [events, totalDonations]);

    // Handle the creation of new events
    const handleCreateEvent = (event) => {
        setEvents([...events, event]);
    };

    // Function to clear events from local storage
    const clearEvents = () => {
        localStorage.removeItem('events');
        setEvents([]);
    };

    // Function to calculate donation percentage dynamically for each event
    const calculatePercentage = (currentAmount, targetAmount) => {
        return (currentAmount / targetAmount) * 100;
    };

    // Update total donations when a new donation is made for an event
    const handleDonation = (amount, eventIndex) => {
        const newEvents = [...events];
        newEvents[eventIndex].currentDonation += amount;

        // Update the event's donation
        setEvents(newEvents);

        // Update the total donations across all events
        const newTotalDonations = totalDonations + amount;
        setTotalDonations(newTotalDonations);
    };

    return (
        <>
            <MyNavbar />
            <div className="sectionsV">
                <div className="content-containerV">
                    <h3><b>Fundraising for those affected by the recent fire in Barangay Pasonanca</b></h3>
                    <p className="creditsV">Creator: Maria Donicia Solomon</p>
                    <div className="image-containerV">
                        <img src={pic} alt="Fundraising event for fire victims in Barangay Pasonanca" />
                    </div>
                    <p className="contentV">
                        Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="graphic-ContainerV">
                    <h2 className="donation-titleV">Php {targetDonationAmount.toLocaleString()} needed</h2>
                    <div
                        className="circular-graphV"
                        style={{ background: `conic-gradient(#e1a736 ${percentage}%, #162f65 ${percentage}%)` }}
                    >
                        <div className="percentageV">{percentage.toFixed(2)}%</div>
                    </div>
                    <div className="input-containerV">
                        <div className="button-containerV">
                            <button className="donationButtonV">
                                <Link to="/page5">Donate now</Link>
                            </button>
                            <button
                                className="donationButton secondaryV"
                                onClick={() => setFormModalOpen(true)}
                            >
                                Share now
                            </button>
                        </div>
                        <div className="donation-listV">
                            <p>*** *** donated Php1000.00</p>
                            <p>*** *** donated Php500.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="buttonCreate" onClick={() => setModalOpen(true)}> + </button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreateEvent}
            />

            <FormModal
                isOpen={isFormModalOpen}
                onClose={() => setFormModalOpen(false)}
            />

            <div className="events-list">
                {events.map((event, index) => {
                    const eventPercentage = calculatePercentage(event.currentDonation, targetDonationAmount);
                    return (
                        <div className="event-card" key={index}>
                            <div className="content-Container-Modal">
                                <h3>{event.event}</h3>
                                <p className="creditsV">{event.Name}</p>
                                <div className="image-containerV">
                                    <img src={pic} alt="Fundraising event for fire victims in Barangay Pasonanca" />
                                </div>
                                <div className="border">
                                    <p className="contentV">{event.description}</p>
                                </div>
                            </div>
                            <div className="graphic-Container-Graphic">
                                <h2 className="donation-titleV">Php {event.currentDonation} needed</h2>
                                <div
                                    className="circular-graphV"
                                    style={{ background: `conic-gradient(#e1a736 ${eventPercentage}%, #162f65 ${eventPercentage}%)` }}
                                >
                                    <div className="percentageV">{eventPercentage.toFixed(2)}%</div>
                                </div>
                                <div className="input-containerV">
                                    <div className="button-containerV">
                                        <button className="donationButtonV" onClick={() => handleDonation(1000, index)}>Donate Php 1000</button>
                                        <button className="donationButton secondaryV">Volunteer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button onClick={clearEvents}>Clear Events</button>
            <MyFooter />
        </>
    );
};

export default DonationPage;
