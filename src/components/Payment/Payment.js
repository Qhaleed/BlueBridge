import React, { useState, useEffect } from "react";
import NavigationBar from '../../components/NavigationBar/navbar.js';
import "./Payment.css";
import "./style.css";

export const Payment = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=AXNXlP_DWTYFucmXM0bx3TYWWTc0bt6nLduIfSVYSmF_9oWR5Ls0uTgUXo8I2Y-bZlACZRxiU1eqz_mA&components=buttons&disable-funding=venmo&currency=PHP';
        script.addEventListener('load', () => {
            window.paypal.Buttons({
                style: {
                    layout: 'vertical',
                    color: 'gold',
                    shape: 'pill',
                    label: 'paypal'
                },
                createOrder: function (data, actions) {
                    const amountInput = document.getElementById('amount').value;

                    if (!amountInput || parseFloat(amountInput) <= 0) {
                        document.getElementById('errorMSG').innerText = 'Enter a valid amount!';
                        return;
                    }
                    document.getElementById('errorMSG').innerText = '';
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amountInput
                            }
                        }]
                    });
                },
                onApprove: function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        const amountInput = document.getElementById('amount').value;
                        window.location.href = `thankYou.html?amountInput=${encodeURIComponent(amountInput)}`;
                    }).catch(function (err) {
                        console.error("Payment error: ", err);
                    });
                }
            }).render('#paypal-button-container');
        });
        document.body.appendChild(script);
    }, []);

    const passValue = (placeNum) => {
        document.getElementById('amount').value = placeNum;
    };

    return (
        <>
            <NavigationBar />
            <div className='Container'>
                <div className='PaymentContainer'>
                    <p> Enter your donation </p>
                    <div id='PaymentOptions'>
                        <button onClick={() => passValue(200)}> 200 </button>
                        <button onClick={() => passValue(400)}> 400 </button>
                        <button onClick={() => passValue(800)}> 800 </button>
                        <button onClick={() => passValue(900)}> 900 </button>
                    </div>
                    <p> Mode of Payment </p>
                    <div className="container">
                        <input type="number" id="amount" placeholder="Enter amount" step="0.01" min="0.01" />
                        <h3><span id="errorMSG"></span></h3>
                        <div id="paypal-button-container"></div>
                    </div>
                    <p> Your donation will directly go to those affected by the recent fire in Barangay Pasonanca </p>
                </div>
            </div>
        </>
    );
};

export default Payment;
