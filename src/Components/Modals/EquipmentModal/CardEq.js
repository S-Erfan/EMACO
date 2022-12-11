import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCommandTarget } from "../../../Redux/placeReducer/placeAction";
import { CardGroundTag } from "./Styles";

const CardEq = ({ icon, name, id }) => {

  const TC = useSelector(state => state.places.commandTarget)
  const dispatch = useDispatch();

  const setCommandHandle = () => {
    // setCommandTarget
    dispatch(setCommandTarget({command: name, icon: icon, id: id}))
  }

  return (
    <CardGroundTag onClick={setCommandHandle} active={TC === "" ? false : TC.id === id ? true : false } >
      <div>{icon}</div>
      <span>{name}</span>
    </CardGroundTag>
  );
};

export default CardEq;
