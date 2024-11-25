import React from "react";
import { useNavigate } from "react-router-dom";
import {
  InformationStyled,
  CircularGraph,
  DonationTitle,
  ButtonContainer,
  DonationButton,
  DonationList,
} from "../mainContent.styled";

export const InformationContainer = () => {
  const targetAmount = 20000; 
  const [donations, setDonations] = React.useState([]); 
  const [totalDonated, setTotalDonated] = React.useState(0); 

  const navigate = useNavigate(); 


  const percentageRaised = ((totalDonated / targetAmount) * 100).toFixed(2);

  const handleDonateClick = () => {
    navigate("/page2");
  };

  return (
    <div>
      <InformationStyled>

        <DonationTitle>Php {targetAmount} needed</DonationTitle>

        <CircularGraph percentage={percentageRaised} />

        <ButtonContainer>
          <DonationButton onClick={handleDonateClick}>Donate</DonationButton>
          <DonationButton isSecondary>Share</DonationButton>
        </ButtonContainer>

        <DonationList>
          {donations.map((donation, index) => (
            <p key={index}>{donation}</p>
          ))}
        </DonationList>
      </InformationStyled>
    </div>
  );
};

export default InformationContainer;





/* 
import React, { useState } from "react";
import {
  InformationStyled,
  CircularGraph,
  DonationTitle,
  ButtonContainer,
  DonationButton,
  DonationList,
} from "./mainContent.styled";

export const InformationContainer = () => {
  const targetAmount = 20000; // Fixed target amount
  const [donations, setDonations] = useState([]); // Donation list state
  const [donationAmount, setDonationAmount] = useState(""); // User input state
  const [totalDonated, setTotalDonated] = useState(0); // Total donations state

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value); // Update input value
  };

  const addDonation = () => {
    if (donationAmount && !isNaN(donationAmount)) {
      // Only add donation if there's a value and it's a valid number
      const newDonation = `*** *** donated Php${donationAmount}.00`;
      setDonations([...donations, newDonation]); // Update donations list
      setTotalDonated(totalDonated + parseFloat(donationAmount)); // Update total donated
      setDonationAmount(""); // Clear input field after donation
    }
  };

  // Calculate the percentage of the target raised
  const percentageRaised = ((totalDonated / targetAmount) * 100).toFixed(2);

  return (
    <div>
      <InformationStyled>

        <DonationTitle>Php {targetAmount} needed</DonationTitle>


        <CircularGraph percentage={percentageRaised} />


        <div>
          <input
            type="number"
            value={donationAmount}
            onChange={handleDonationChange}
            placeholder="Enter donation amount"
            style={{
              padding: "10px",
              fontSize: "1rem",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #162f65",
            }}
          />
          <ButtonContainer>
            <DonationButton onClick={addDonation}>Donate</DonationButton>
            <DonationButton isSecondary>Share</DonationButton>
          </ButtonContainer>
        </div>


        <DonationList>
          {donations.map((donation, index) => (
            <p key={index}>{donation}</p>
          ))}
        </DonationList>
      </InformationStyled>
    </div>
  );
};

export default InformationContainer; */
