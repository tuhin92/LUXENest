import { Helmet } from "react-helmet-async";
import MapComponent from "./MapComponent";

const AboutUS = () => {
  return (
    <div className="container mx-auto mb-20 mt-8">
      <Helmet>
        <title>LUXENest | About Us</title>
      </Helmet>
      <div className="hero min-h-[80vh] bg-purple-200 rounded-2xl ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/bmGrQ46/pexels-sabel-blanco-1662549.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              At LuxeNest, we specialize in curating a diverse portfolio of
              premium residential properties tailored to meet the unique needs
              and preferences of our clients. Our collection features an array
              of luxurious estates, modern apartments, cozy cottages, spacious
              family homes, luxury condos, and chic lofts, each meticulously
              selected for its exceptional quality, stunning design, and prime
              locations. Imagine waking up to breathtaking ocean views in our
              Luxury Villa with Ocean View, indulging in the ultimate urban
              lifestyle at our Modern Apartment in City Center, or escaping to
              the tranquil countryside retreat of our Cozy Cottage in the
              Countryside. Whether you're seeking a serene sanctuary, a vibrant
              city vibe, or a blend of both, we have the perfect property to
              fulfill your desires. Each of our residences boasts an array of
              upscale amenities designed to enhance your lifestyle, from
              swimming pools and spas to gyms and concierge services. Our
              properties are not just places to live; they're expressions of
              elegance, comfort, and sophistication. With locations spanning
              from bustling metropolises like New York City and Los Angeles to
              serene countryside settings like the Cotswolds in the UK, LuxeNest
              offers unparalleled access to some of the most coveted
              destinations in the world. Whether you're looking for your dream
              home, a lucrative investment opportunity, or a temporary escape,
              LuxeNest is your premier destination for luxury living. Experience
              the epitome of refined living with LuxeNest. Welcome home.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">Location</h2>
      <MapComponent></MapComponent>
      </div>
    </div>
  );
};

export default AboutUS;
