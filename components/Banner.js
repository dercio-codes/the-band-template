import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <div
      style={{
        height: "80vh",
        maxHeight:'90vh',
        marginTop:'32px'

      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundImage: 'url("/banners/chicago.jpg")',
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            <div
              style={{
                marginBottom: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  fontSize: 32,
                  marginBottom: 2,
                }}
              >
                La
              </h1>
              <p>This is the best city.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundImage: 'url("/banners/ny.jpg")',
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            <div
              style={{
                marginBottom: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  fontSize: 32,
                  marginBottom: 2,
                }}
              >
                NY
              </h1>
              <p>This is the best city.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundImage: 'url("/banners/la.jpg")',
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            <div
              style={{
                marginBottom: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  fontSize: 32,
                  marginBottom: 2,
                }}
              >
                LA
              </h1>
              <p>This is the best city.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
