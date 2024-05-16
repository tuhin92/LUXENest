import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css/animate.min.css";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Estates from "./Estates/Estates";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="bg-base-200 pb-12">
      <Helmet>
        <title>LUXENest | Home</title>
      </Helmet>
      <div className="container mx-auto">
        {/* <h2 className="text-2xl">This is home</h2> */}
        <div className="animate__animated animate__fadeInDown mb-12">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/0G3w21j/pexels-philippe-serrand-18720262.jpg"
                alt=""
                style={{ height: "700px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/Rgms0kP/pexels-pixabay-271816.jpg"
                alt=""
                style={{ height: "700px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/ZGppg7D/pexels-jean-van-der-meulen-3753436.jpg"
                alt=""
                style={{ height: "700px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/9ZZtN63/pexels-binyamin-mellish-106399.jpg"
                alt=""
                style={{ height: "700px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/vPxwtwP/pexels-christa-grover-1910472.jpg"
                alt=""
                style={{ height: "700px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl"
                src="https://i.ibb.co/N3ZrFd6/pexels-pixabay-164558.jpg"
                alt=""
                style={{ height: "700px" }}
              />
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>

        {/* Discount section */}
        <div>
          <h2 className="my-12 text-4xl text-center text-purple-950 font-bold">Eid Offer</h2>
          <img src="https://i.ibb.co/D9TF2Ld/Blue-and-Pink-Modern-Tech-Electronics-and-Technology-Retractable-Exhibition-Banner.jpg" alt="" />
        </div>

        {/* Estate section  */}
        <div className="mb-12 mt-10">
          <div className="animate__animated animate__fadeInUp mb-12">
            <Estates></Estates>
          </div>
        </div>
        <div className="my-20">
          <img className="" src="https://i.ibb.co/9qZgL6P/Blue-and-Pink-Modern-Tech-Electronics-and-Technology-Retractable-Exhibition-Banner-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
