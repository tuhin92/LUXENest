import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Estates from "./Estates/Estates";

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="bg-base-200">
        <div className="container mx-auto mt-12">
      {/* <h2 className="text-2xl">This is home</h2> */}
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



      {/* Estate section  */}
      <div className="mb-12">
        <Estates></Estates>
      </div>
    </div>
    </div>
  );
};

export default Home;
