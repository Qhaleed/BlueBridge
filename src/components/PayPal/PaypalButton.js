import React, { useEffect } from 'react';

const PaypalButton = () => {
    useEffect(() => {
        if (window.paypal) {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '0.01' // Set the amount here
                            }
                        }]
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then(details => {
                        alert('Transaction completed by ' + details.payer.name.given_name);
                    });
                }
            }).render('#paypal-button-container');
        }
    }, []);

    return (
        <div>
            <div id="paypal-button-container"></div>
        </div>
    );
};

export default PaypalButton;
