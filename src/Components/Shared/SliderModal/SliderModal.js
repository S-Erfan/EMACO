import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper";
import { ContainerSlid, DivSelectedItem } from "./SliderStyle";
import { AllPlaces } from "../../../Data/Places/Places";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useDispatch } from "react-redux";
import { addPlace } from "../../../Redux/placeReducer/placeAction";
import notify from "../../../utils/toast/notify";

const SliderModal = () => {

  const dispatch = useDispatch();

  const [target, setTarget] = useState({});

  const targetHandler = (e, item) => {
    setTarget(item);
  }

  const setPlaceHandler = () => {
    if(target.name) return dispatch(addPlace(target))
    notify("نام محیط را انتخاب کنید", "error")
  }

  return (
    <>
      <ContainerSlid>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1
            }, 
            260: {
              slidesPerView: 2
            },
            400: {
              slidesPerView: 2.5
            },
            490: {
              slidesPerView: 3.2
            },
            600:{
              slidesPerView: 5
            }
          }}
        >
          {AllPlaces.map((item) => (
            <SwiperSlide className={target === item ? "selectedItem" : ""} key={item.id} onClick={(e) => targetHandler(e, item)}>
              <div className="box">
                <div className="icon">
                  {item.icon}
                </div>
                <span>{item.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <DivSelectedItem>
            <AddRoundedIcon onClick={setPlaceHandler} />
            <div className="selectedPlace" >
              <span className={target.name ? "" : "placeHolder"} >{target.name ? target.name : "نام محیط"}</span>
            </div>
        </DivSelectedItem>
      </ContainerSlid>
    </>
  );
};

export default SliderModal;
