import React from "react";
import { MainCardSelect } from "./CardStyle";
import DeleteBin6LineIcon  from "remixicon-react/DeleteBin6LineIcon"
import DraftLineIcon  from "remixicon-react/DraftLineIcon"
import { useDispatch } from "react-redux";
import { removePlace } from "../../../Redux/placeReducer/placeAction";

const CardSelectPlace = ({icon, name, counter, id}) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removePlace(id))
  }

  return (
    <MainCardSelect>
      <div className="asideBar">
        <div className="icon_place">
            {icon}
        </div>
        <div className="counter_command" >
            {counter}
        </div>
      </div>

      {/*  */}
      <div className="body_place" >
        <div className="titles" >
            <h6>{name}</h6>
            <span>{name}</span>
        </div>
        <div className="icons_holder" >
        <DraftLineIcon />
        <DeleteBin6LineIcon onClick={removeHandler} />
        </div>
        <div className="circle_yell" ></div>
      </div>

    </MainCardSelect>
  );
};

export default CardSelectPlace;
