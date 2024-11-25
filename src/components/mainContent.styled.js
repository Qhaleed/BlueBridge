import styled from "styled-components";

//***************** General Components ********************* //

    export const Footer = styled.footer `
    background-color: #162f65;
    display: flex; 
    width: 100%;
    height: 80px;
    `;

//***************** Donation Page ********************* //

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  border-radius: 20px;
  width: 40vw;
  height: 80vh;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 2%;
  padding: 20px;

  h3 {
    margin-right: 110px;
    margin-left: 110px;
    font-size: 2.5em;
    text-align: left;
    color: #132753;
  }

  #pCredits {
    text-align: left;
    margin-right: 20%;
  }

  #pContent {
    text-align: left;
    margin-left: 19%;
    margin-right: 20%;
  }

  @media screen and (max-width: 1200px) {
    width: 60vw;
    height: 70vh;
    
    h3 {
      font-size: 2em;
      margin-right: 80px;
      margin-left: 80px;
    }

    #pCredits, #pContent {
      margin-left: 15%;
      margin-right: 15%;
    }
  }

    @media screen and (max-width: 768px) {
        width: 80vw;
        height: 60vh;
        
        h3 {
        font-size: 1.8em;
        margin-right: 50px;
        margin-left: 50px;
        }

        #pCredits, #pContent {
        margin-left: 10%;
        margin-right: 10%;
        }
    }

    @media screen and (max-width: 480px) {
        width: 90vw;
        height: auto;

        h3 {
        font-size: 1.5em;
        margin-right: 20px;
        margin-left: 20px;
        }

        #pCredits, #pContent {
        margin-left: 5%;
        margin-right: 5%;
        }
    }
    `;

//***************** Donation Page ********************* //

export const InformationStyled = styled.div`
  display: flex;
  flex-direction: column; /* Align children in a column */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 40vw; /* Set a reasonable width */
  height: 80vh; /* Adjust height dynamically based on content */
  margin: 20px auto; /* Center container horizontally */
  padding: 20px;
  background-color: #ffffff; /* Optional: Add a background color */
  gap: 20px; 
`;


//***************** Donation Page ********************* //

export const ImageContainer = styled.div`
        background-color: aqua;
        border-radius: 20px;
        width: 360px;
        height: 360px;
    `
export const DonationTitle = styled.h2`
    font-size: 1.8rem;
    color: #132753;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
    `;

// Buttons container
export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 20px 0;
    `;

// Styled buttons
export const DonationButton = styled.button`
    background-color: ${(props) => (props.isSecondary ? "#e1a736" : "#162f65")};
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
    background-color: ${(props) => (props.isSecondary ? "#d2a034" : "#0e2448")};
    }
    `;

// Donation list
export const DonationList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;

    p {
    font-size: 1rem;
    color: #132753;
    padding: 10px 0;
    border-bottom: 1px solid #e1a736;
    width: 100%;
    }

    p::before {
    content: "⭐";
    margin-right: 5px;
    color: #e1a736;
    }
    `;

//***************** Donation Page ********************* //

export const CircularGraph = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: conic-gradient(
        #e1a736 ${(props) => props.percentage || 0}%,
        #162f65 ${(props) => props.percentage || 0}%
    );
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        content: "${(props) => props.percentage || 0}%";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #132753;
        font-size: 1.5rem;
        font-weight: bold;
        background: white;
        width: 70%;
        height: 70%;
        border-radius: 50%;
    }

    @media screen and (max-width: 768px) {
        width: 120px;
        height: 120px;

        &::after {
        font-size: 1.2rem;
        }
    }

    @media screen and (max-width: 480px) {
        width: 100px;
        height: 100px;

        &::after {
        font-size: 1rem;
        }
    }
    `;


//***************** Payment Page ********************* //

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f6ef;
    min-height: 100vh;
    padding: 20px;
  `;

export const DonationSection = styled.div`
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 30px;
    width: 90%;
    max-width: 500px;
    text-align: center;
    margin-top: 20px;

    h2 {
      color: #132753;
      font-size: 1.5em;
      margin-bottom: 20px;
    }
  `;

export const DonationButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    button {
      background-color: #e1a736;
      border: none;
      color: white;
      padding: 10px 15px;
      font-size: 1rem;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #d2a034;
      }
    }
  `;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff6e0;
    border: 1px solid #e1a736;
    border-radius: 10px;
    padding: 10px 15px;
    margin-bottom: 20px;

    input {
      border: none;
      outline: none;
      font-size: 1rem;
      text-align: right;
      width: 100%;
      color: #132753;
      margin-right: 10px;
    }

    span {
      color: #132753;
      font-size: 1rem;
    }
  `;

export const PaymentOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f9f6ef;
      border: 1px solid #162f65;
      border-radius: 10px;
      padding: 10px;
      color: #132753;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #162f65;
        color: white;
      }

      img {
        margin-right: 10px;
      }
    }
  `;

export const DecorativeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;

    img {
      max-width: 150px;
    }
  `;

export const FooterWrapper = styled(Footer)`
    position: absolute;
    bottom: 0;
  `;



//***************** Landing Page ********************* //

  export const FactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
  `;

  export const WaveBanner = styled.div`
    position: relative;
    background: linear-gradient(to right, #f2c94c, #f2994a);
    color: #132753;
    font-family: "Tahoma", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding: 40px 0;
    border-radius: 0 0 40px 40px;
    width: 90vw;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background-color: #fff;
      border-radius: 50% 50% 0 0; /* Creates the wave */
      transform: translateY(40%);
    }
  `;

    