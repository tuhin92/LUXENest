import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Load Stripe's public key
const stripePromise = loadStripe('your_stripe_publishable_key');

const Root = () => {
    return (
        <div className="bg-base-200">
            <Navbar />
            {/* Wrap the Outlet with Elements provider */}
            <Elements stripe={stripePromise}>
                <Outlet />
            </Elements>
            <Footer />
        </div>
    );
};

export default Root;
