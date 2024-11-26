import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../../components/NavigationBar/navbar";
import pic from "./ImageContainer/image.png";
import "./DonationStyleSheet.css";
import MyFooter from "../../components/Footer/Footer";
import Modal from "../../components/EventModal/EventModal"; // Assuming Modal component is in the same directory
import FormModal from "../../components/FormPageModal/FormModal";

export const DonationPage = () => {

    const [isFormModalOpen, setFormModalOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState(() => {
        // Retrieve events from local storage or default to an empty array
        const savedEvents = localStorage.getItem('events');
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    useEffect(() => {
        // Save events to local storage whenever the events state changes
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    const handleCreateEvent = (event) => {
        setEvents([...events, event]);
    };

    const clearEvents = () => {
        localStorage.removeItem('events');
        setEvents([]);
    };

    return (
        <>
            <MyNavbar />
            <div className="sectionsV">
                <div className="content-containerV">
                    <h3> <b>Fundraising for those affected by the recent fire in Barangay Pasonanca</b> </h3>
                    <p className="creditsV">Creator: Maria Donicia Solomon</p>
                    <div className="image-containerV">
                        <img
                            src={pic}
                            alt="Fundraising event for fire victims in Barangay Pasonanca"
                        />
                    </div>
                    <p className="contentV"> Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="graphic-ContainerV">
                    <h2 className="donation-titleV">Php 20,000 needed</h2>
                    <div className="circular-graphV" style={{ background: `conic-gradient(#e1a736 50%, #162f65 50%)` }}>
                        <div className="percentageV">50%</div>
                    </div>

                    <div className="input-containerV">
                        <div className="button-containerV">
                            <button className="donationButtonV"> <Link to="/page5"> Donate now </Link> </button>
                            <button className="donationButton secondaryV" onClick={() => setFormModalOpen(true)}> Share now </button>
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
                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <div className="content-Container-Modal">
                            <h3>{event.event}</h3>
                            <p className="creditsV"> {event.Name} </p>
                            <div className="image-containerV">
                                <img
                                    src={pic}
                                    alt="Fundraising event for fire victims in Barangay Pasonanca"
                                />
                            </div>
                            <div className="border">
                                <p className="contentV">{event.description}</p>
                            </div>
                        </div>

                        <div className="graphic-Container-Graphic">
                            <h2 className="donation-titleV">Php {event.donation} needed</h2>
                            <div className="circular-graphV" style={{ background: 'blue' }}>
                                <div className="percentageV">0%</div>
                            </div>
                            <div className="input-containerV">
                                <div className="button-containerV">
                                    <button className="donationButtonV"> <Link to="/page5"> Donate now </Link> </button>
                                    <button className="donationButton secondaryV"> Share now </button>
                                </div>
                                <div className="donation-listV">
                                    {/* Donation list */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={clearEvents}>Clear Events</button>

            <MyFooter />
        </>
    );
};

export default DonationPage;
