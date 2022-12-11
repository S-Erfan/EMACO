import React from "react";
import { GroundControlerTag } from "./SenarioStyles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useSelector } from "react-redux";
import CardSenario from "./CardSenario";

const SenarioController = () => {
  const senarios = useSelector((state) => state.senario.allSenario);

  return (
    <GroundControlerTag>
      <Swiper 
        spaceBetween={20} 
        nested={true} 
        scrollbar={{ draggable: true }}
        mousewheel={{forceToAxis: false, eventsTarget: ".header_card"}}
        noSwipingClass={"actions_command"}
      >
        {senarios.map((item) => (
          <SwiperSlide key={item.id}>
            <CardSenario title={item.name} actions={item.actions} />
          </SwiperSlide>
        ))}
      </Swiper>
    </GroundControlerTag>
  );
};

export default SenarioController;
