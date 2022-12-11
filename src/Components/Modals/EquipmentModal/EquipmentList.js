import AddRounded from "@mui/icons-material/AddRounded";
import React from "react";
import CardEq from "./CardEq";
import { GroundTag } from "./Styles";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import HeatingIconCus from "../../Shared/CustomIcons/HeatingIconCus";
import { AllCommand } from "../../../Data/Command/Command";
import { useDispatch, useSelector } from "react-redux";
import { createCommand } from "../../../Redux/placeReducer/placeAction";

const EquipmentList = () => {

  const targetCommand = useSelector(state => state.places.commandTarget)
  const dispatch = useDispatch();

  const createCommandHandler = () => {
    console.log(targetCommand)
    dispatch(createCommand(targetCommand))
  }

  return (
    <GroundTag>
      <div className="addBtn" onClick={createCommandHandler} >
        <AddRounded />
      </div>
      <div className="equipments_">
        {AllCommand.map((item) => (
          <CardEq key={item.id} name={item.name} icon={item.icon} id={item.id} onCliceked={() => createCommandHandler(item)} />
        ))}
      </div>
    </GroundTag>
  );
};

export default EquipmentList;
