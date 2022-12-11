import React from "react";
import { MainSliderPlace } from "./SliderStyle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper";
import CardSelectPlace from "../CardSelectPlace/CardSelectPlace";
import { useSelector } from "react-redux";

const SliderSelectPlace = () => {
  const selectedPlaces = useSelector((state) => state.places.slectedPlace);

  return (
    <MainSliderPlace>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode]}
        className="slider_placeTargets"
        breakpoints={{
            500: {
                slidesPerView: 1.5
            },
            678: {
                slidesPerView: 2.4
            }
        }}
      >
        {selectedPlaces.map((item) => (
          <SwiperSlide key={item.id}>
            <CardSelectPlace id={item.id} icon={item.icon} counter={item.counter ? item.counter : 0 } name={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MainSliderPlace>
  );
};

export default SliderSelectPlace;
