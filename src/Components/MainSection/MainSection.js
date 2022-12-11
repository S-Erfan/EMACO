import React, { useState } from "react";
import TimePickerSection from "../TimePicker/TimePicker";
import { ContainerDiv } from "./MainStyle";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EquipmentModal from "../Modals/EquipmentModal/EquipmentModal";
import { useSelector } from "react-redux";
import ActionCard from "./ActionCard";

const MainSection = () => {
  const [eqModal, setEqModal] = useState(false);

  const targetPlace = useSelector((state) => state.places.target);

  return (
    <>
      <ContainerDiv className="glass_item">
        <div className="detail_device">
          <AddRoundedIcon
            className="add_action_icon"
            onClick={() => setEqModal(true)}
          />
          <div className="seleceted_places glass_item">
            <span className="name_place">
              {!!targetPlace ? (
                targetPlace.name
              ) : (
                <span className="show_anim_text">
                  بخش مورد نظر را انتخاب کنید.
                </span>
              )}
            </span>
            <div className="actions_place">
              {!!targetPlace && targetPlace.actions.map(item => <ActionCard title={item.command} key={item.uid} />)}
            </div>
          </div>
        </div>
        <div className="timePicker_holder glass_item">
          <TimePickerSection />
        </div>
      </ContainerDiv>
      <EquipmentModal open={eqModal} handleClose={() => setEqModal(false)} />
    </>
  );
};

export default MainSection;
