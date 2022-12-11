import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import PlaceContainer from "./PlaceContainer";
import { GroundPlacesActiveTag } from "./Styles";
import { selectTarget } from "../../../Redux/placeReducer/placeAction";

const TargetPlace = () => {
  const places = useSelector((state) => state.places.slectedPlace);
  const dispatch = useDispatch();
  const swiperSlide = useRef();

  const getIdPlace = async (ass = false) => {
    try {
      const actEl = await swiperSlide.current.querySelector(
        ".swiper-slide-active"
      ).classList;
      let idEl = actEl[actEl.length - 1];
      await dispatch(selectTarget(!!ass ? 1 : +idEl));
    } catch (err) {
      console.log("worked");
    }
    // dispatch(selectTarget(idEl));
  };

  useEffect(() => {
    setTimeout(() => {
      getIdPlace(true);
    }, 1500);
  }, []);

  return (
    <>
      <GroundPlacesActiveTag>
        <Swiper
          ref={swiperSlide}
          spaceBetween={20}
          slidesPerView={1.1}
          dir={"ltr"}
          className="swiper_placesActive"
          onSlideChangeTransitionEnd={(swiper) => {
            getIdPlace();
          }}
        >
          {places.map((item) => (
            <SwiperSlide className={item.id} key={item.id}>
              <PlaceContainer
                iconP={item.icon}
                nameP={item.name}
                titleP={item.name}
                actions={item.actions}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </GroundPlacesActiveTag>
    </>
  );
};

export default TargetPlace;
