import React from "react";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import CardAction from "./CardAction";
import { ListActionsContainerTag, PlaceContainerTag } from "./Styles";

const PlaceContainer = ({ titleP, nameP, iconP, actions }) => {
  return (
    <>
      <PlaceContainerTag>
        <div className="header_place">
          <div className="info_place">
            <div className="svg_holder">{iconP}</div>
            <div className="des_holder">
              <h3>{titleP}</h3>
              <h5>{nameP}</h5>
            </div>
          </div>
          <div className="delete_place">
            <DeleteBin6LineIcon />
          </div>
        </div>
        <ListActionsContainerTag>
          {actions.map((item) => (
            <CardAction
              key={item.uid}
              id={item.uid}
              number={item.number}
              title={item.command}
            />
          ))}
        </ListActionsContainerTag>
      </PlaceContainerTag>
    </>
  );
};

export default PlaceContainer;
