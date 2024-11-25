import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../../components/NavigationBar/navbar";
import pic from "./ImageContainer/image.png"
import "./DonationStyleSheet.css";

export const DonationPage = () => {
  return (
    <>
      <MyNavbar />
        <div className="sections">
            <div className="content-container"> 
                <h3> <b>Fundraising for those affected by the recent fire in Barangay Pasonanca</b> </h3>
                <p className="credits">Creator: Maria Donicia Solomon</p>
                    <div className="image-container">
                        <img
                        src={pic}
                        alt="Fundraising event for fire victims in Barangay Pasonanca"
                        />
                    </div>
                <p className="content"> Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

            <div className="graphic-Container"> 
                <h2 className="donation-title">Php 20,000 needed</h2>
                    <div className="circular-graph" style={{background: `conic-gradient(#e1a736 50%, #162f65 50%)`}}>
                        <div className="percentage">50%</div>
                    </div>

                    <div className="input-container">
                        <div className="button-container">
                        <button className="donationButton"> <Link to="/page5"> Donate now </Link> </button>
                            <button className="donationButton secondary"> Share now </button> 
                        </div>

                        <div className="donation-list">
                            <p>*** *** donated Php1000.00</p>
                            <p>*** *** donated Php500.00</p>
                        </div>
                    </div>
                </div>
        </div> 
        <div className="sections" style={{backgroundColor: 'beige'}}>
            <div className="content-container"> 
                <h3> <b>Fundraising for those affected by the recent fire in Barangay Pasonanca</b> </h3>
                <p className="credits">Creator: Maria Donicia Solomon</p>
                    <div className="image-container">
                        <img
                        src={pic}
                        alt="Fundraising event for fire victims in Barangay Pasonanca"
                        />
                    </div>
                <p className="content"> Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

            <div className="graphic-Container"> 
                <h2 className="donation-title">Php 20,000 needed</h2>
                    <div className="circular-graph" style={{background: `conic-gradient(#e1a736 50%, #162f65 50%)`}}>
                        <div className="percentage">50%</div>
                    </div>

                    <div className="input-container">
                        <div className="button-container">
                        <button className="donationButton"> <Link to="/page5"> Donate now </Link> </button>
                            <button className="donationButton secondary"> Share now </button> 
                        </div>

                        <div className="donation-list">
                            <p>*** *** donated Php1000.00</p>
                            <p>*** *** donated Php500.00</p>
                        </div>
                    </div>
                </div>
        </div> 
        <div className="sections">
            <div className="content-container"> 
                <h3> <b>Fundraising for those affected by the recent fire in Barangay Pasonanca</b> </h3>
                <p className="credits">Creator: Maria Donicia Solomon</p>
                    <div className="image-container">
                        <img
                        src={pic}
                        alt="Fundraising event for fire victims in Barangay Pasonanca"
                        />
                    </div>
                <p className="content"> Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

            <div className="graphic-Container"> 
                <h2 className="donation-title">Php 20,000 needed</h2>
                    <div className="circular-graph" style={{background: `conic-gradient(#e1a736 50%, #162f65 50%)`}}>
                        <div className="percentage">50%</div>
                    </div>

                    <div className="input-container">
                        <div className="button-container">
                            <button className="donationButton"> <Link to="/page5"> Donate now </Link> </button>
                            <button className="donationButton secondary"> Share now </button> 
                        </div>

                        <div className="donation-list">
                            <p>*** *** donated Php1000.00</p>
                            <p>*** *** donated Php500.00</p>
                        </div>
                    </div>
                </div>
        </div> 

    </>
  );
};

export default DonationPage;
