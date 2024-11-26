import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../../components/NavigationBar/navbar";
import venue1 from "./imageContainer/image.png";
import "./VolunteerStyleSheet.css";
import MyFooter from "../../components/Footer/Footer";

export const VolunteerPage = () => {

  const [progress, setProgress] = useState(0);
  const maxVolunteers = 100;

  const handleVolunteer = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 1;
      return newProgress > maxVolunteers ? maxVolunteers : newProgress;
    });
  };

  const percentage = Math.round((progress / maxVolunteers) * 100);

  return (
    <>
      <MyNavbar />
      <div className="sections">
        <div className="content-container">
          <h3>
            <b>Volunteer Crowdsourcing for relief operations</b>
          </h3>
          <p className="credits">Creator: Kamukha ni sir si resly</p>
          <div className="image-container">
            <img
              src={venue1}
              alt="Fundraising event for fire victims in Barangay Pasonanca"
            />
          </div>
          <p className="content">
            Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="graphic-Container">
          <div className="button-container">
            <h2 className="volunteer-title">{percentage}% Volunteers Recruited</h2>
            <button className="volunteerButtonV" onClick={handleVolunteer}> Volunteer Now </button>
          </div>
          <div className="progress-bar">

            <div
              className="progress-filled"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="input-container">
          </div>
          <p>{progress} of {maxVolunteers} volunteers recruited.</p>
        </div>
      </div>
      <div className="sections">
        <div className="content-container">
          <h3>
            <b>Volunteer Crowdsourcing for relief operations</b>
          </h3>
          <p className="credits">Creator: Kamukha ni sir si resly</p>
          <div className="image-container">
            <img
              src={venue1}
              alt="Fundraising event for fire victims in Barangay Pasonanca"
            />
          </div>
          <p className="content">
            Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="graphic-Container">
          <div className="button-container">
            <h2 className="volunteer-title">{percentage}% Volunteers Recruited</h2>
            <button className="volunteerButtonV" onClick={handleVolunteer}> Volunteer Now </button>
          </div>
          <div className="progress-bar">

            <div
              className="progress-filled"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="input-container">
          </div>
          <p>{progress} of {maxVolunteers} volunteers recruited.</p>
        </div>
      </div>
      <div className="sections">
        <div className="content-container">
          <h3>
            <b>Volunteer Crowdsourcing for relief operations</b>
          </h3>
          <p className="credits">Creator: Kamukha ni sir si resly</p>
          <div className="image-container">
            <img
              src={venue1}
              alt="Fundraising event for fire victims in Barangay Pasonanca"
            />
          </div>
          <p className="content">
            Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="graphic-Container">
          <div className="button-container">
            <h2 className="volunteer-title">{percentage}% Volunteers Recruited</h2>
            <button className="volunteerButtonV" onClick={handleVolunteer}> Volunteer Now </button>
          </div>
          <div className="progress-bar">

            <div
              className="progress-filled"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="input-container">
          </div>
          <p>{progress} of {maxVolunteers} volunteers recruited.</p>
        </div>
      </div>
      <MyFooter></MyFooter>
    </>
  );
};

export default VolunteerPage;
