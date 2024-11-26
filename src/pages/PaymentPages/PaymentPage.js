import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/navbar.js";
import "./PaymentStyleSheet.css";
import "../../App.css";



export const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [paypalInitialized, setPaypalInitialized] = useState(false);

  useEffect(() => {
    // Load PayPal SDK script dynamically
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AXNXlP_DWTYFucmXM0bx3TYWWTc0bt6nLduIfSVYSmF_9oWR5Ls0uTgUXo8I2Y-bZlACZRxiU1eqz_mA&components=buttons&disable-funding=venmo&currency=PHP";
    script.async = true;

    script.onload = () => {
      if (window.paypal) {
        setPaypalInitialized(true);
        renderPayPalButtons(); // Render buttons only after SDK loads
      } else {
        console.error("PayPal SDK failed to load.");
        setError("PayPal SDK failed to load. Please refresh the page.");
      }
    };

    script.onerror = () => {
      console.error("Failed to load PayPal SDK.");
      setError("Failed to load PayPal SDK. Please check your internet connection.");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const renderPayPalButtons = () => {
    const container = document.getElementById("paypal-button-container");
    if (!container) {
      console.error("PayPal button container not found.");
      return;
    }

    container.innerHTML = ""; // Clear old buttons

    try {
      window.paypal.Buttons({
        style: { layout: "vertical", color: "gold", shape: "pill", label: "paypal" },
        createOrder: (data, actions) => {
          const formattedAmount = document.getElementById('amount').value
          if (!formattedAmount || formattedAmount <= 0) {
            setError("Enter a valid amount!");
            return Promise.reject(); // Prevent order creation
          }
          setError("");
          return actions.order.create({
            purchase_units: [{ amount: { value: formattedAmount } }], // Pass the formatted amount
          });
        },
        onApprove: (data, actions) =>
          actions.order
            .capture()
            .then((details) => {
              window.location.href = `thankYou.html?amountInput=${encodeURIComponent(
                amount
              )}`;
            })
            .catch((err) => {
              console.error("Payment capture error: ", err);
              setError("Payment could not be completed. Please try again.");
            }),
      }).render("#paypal-button-container");
    } catch (err) {
      console.error("PayPal Buttons error: ", err);
      setError("Failed to render PayPal Buttons. Please refresh the page.");
    }
  };

  let renderTimeout;

  const handleAmountChange = (value) => {
    clearTimeout(renderTimeout); // Clear the previous timeout
    const formattedValue = value.toString().trim();
    setAmount(formattedValue);
    setError(""); // Clear errors

    if (paypalInitialized) {
      // Wait 300ms before re-rendering PayPal buttons
      renderTimeout = setTimeout(() => {
        renderPayPalButtons();
      }, 300);
    }
  };

  return (
    <>
      <NavigationBar />
      <img src="./Hands1.png" className="bgimg1"></img>
      <img src="./Hands2.png" className="bgimg2"></img>
      <div>
        <div className="Container">
          <div className="PaymentContainer">
            <p className="textHeader">Enter your donation</p>
            <div id="PaymentOptions">
              <button onClick={() => handleAmountChange(200)}>₱ 200</button>
              <button onClick={() => handleAmountChange(400)}>₱ 400</button>
              <button onClick={() => handleAmountChange(800)}>₱ 800</button>
              <button onClick={() => handleAmountChange(900)}>₱ 900</button>
            </div>
            <div className="container">
              <div className="input-wrapper">
                <span className="currency-symbol">₱</span>
                <span className="twozeroes">.00</span>
                <input
                  type="number"
                  id="amount"
                  className="inputDesign"
                  step="0.01"
                  min="0.01"
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                />
              </div>
              <p className="paymentHeader">Payment Method</p>
              <br />
              {error && <h3 style={{ color: "red" }}>{error}</h3>}
              <div id="paypal-button-container"></div>
            </div>
            <p>
              Your donation will directly go to those affected by the recent fire in
              Barangay Pasonanca
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
