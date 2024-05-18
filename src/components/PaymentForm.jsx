import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Send the payment method ID to your server to complete the payment
            await processPayment(paymentMethod.id);
            setLoading(false);
        }
    };

    const processPayment = async (paymentMethodId) => {
        try {
            const response = await axios.post('http://localhost:5000/payment/process_payment', {
                token: paymentMethodId,
            });
            console.log(response.data);
            // Handle success response
        } catch (error) {
            console.error('Error processing payment:', error.response.data);
            setError(error.response.data.message || 'Error processing payment');
        }
    };

    return (
        <div className='flex justify-center items-center my-24'>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Card Details:</label>
                        <CardElement className="border border-gray-300 rounded px-3 py-2 w-full" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit" disabled={!stripe || loading}>
                        {loading ? 'Processing...' : 'Pay'}
                    </button>
                    {error && <div className="text-red-500 mt-4">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;
