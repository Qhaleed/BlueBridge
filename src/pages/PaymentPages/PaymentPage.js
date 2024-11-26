import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/navbar.js";
import "./PaymentStyleSheet.css";

export const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AXNXlP_DWTYFucmXM0bx3TYWWTc0bt6nLduIfSVYSmF_9oWR5Ls0uTgUXo8I2Y-bZlACZRxiU1eqz_mA&components=buttons&disable-funding=venmo&currency=PHP";
    script.async = true;

    script.onload = () => {
      if (window.paypal) {
        renderPayPalButtons();
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
    if (!container) return;

    container.innerHTML = ""; // Clear old buttons

    try {
      window.paypal.Buttons({
        style: { layout: "vertical", color: "gold", shape: "pill", label: "paypal" },
        createOrder: (data, actions) => {
          if (!amount || parseFloat(amount) <= 0) {
            setError("Enter a valid amount!");
            return;
          }
          setError("");
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
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
            }),
      }).render("#paypal-button-container");
    } catch (err) {
      console.error("PayPal Buttons error: ", err);
      setError("Failed to render PayPal Buttons. Please refresh the page.");
    }
  };

  const handleAmountChange = (value) => {
    setAmount(value);
    setError(""); // Clear previous errors
    if (window.paypal) {
      renderPayPalButtons(); // Re-render buttons with updated amount
    }
  };

  return (
    <>
      <NavigationBar />
      <div>
        <div className="Container">
          <div className="PaymentContainer">
            <p>Enter your donation</p>
            <div id="PaymentOptions">
              <button onClick={() => handleAmountChange(200)}>200</button>
              <button onClick={() => handleAmountChange(400)}>400</button>
              <button onClick={() => handleAmountChange(800)}>800</button>
              <button onClick={() => handleAmountChange(900)}>900</button>
            </div>
            <p>Mode of Payment</p>
            <div className="container">
              <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                step="0.01"
                min="0.01"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
              />
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
