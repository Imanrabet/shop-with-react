import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./Header.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between",padding:'0.5rem' }}>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        style={{marginLeft:'0.2rem'}}
      >
        <SwiperSlide className="swiper-image-box">
          <Box component="img" src="./images/slider1_orginal.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-image-box">
          <Box component="img" src="./images/slider2_orginal.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <Box sx={{ display: "flex", flexDirection: "column", width: "33%" ,justifyContent:'space-between'}}>
        <Box
          component="img"
          src="./images/banner-btn2.jpg"
          alt=""
          
        />
        <Box
          component="img"
          src="./images/banner-top.jpg"
          alt=""
          
        />
      </Box>
    </Box>
  );
}
