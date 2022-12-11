import React, { useState } from "react";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import CardActions from "./CardActions";
import { CardSenarioTag } from "./SenarioStyles";

const CardSenario = ({ title, actions }) => {

    const [onOff, setOnOff] = useState(0);


  return (
    <CardSenarioTag>
      <div className="header_card">
        <div className="btn_controller">
          <DeleteBin6LineIcon />
          <button onClick={() => setOnOff(1)} className={onOff === 1 ? "activeStatus" : ""}>ON</button>
          <button onClick={() => setOnOff(0)} className={onOff === 0 ? "activeStatus" : ""}>OFF</button>
        </div>
        <span>{title}</span>
      </div>
      <div className="actions_command">
        {actions.map((item) => (
          <CardActions
            status="act"
            key={item.id}
            id={item.id}
            title={item.name}
            place={item.place}
            number={item.number}
          />
        ))}
      </div>
    </CardSenarioTag>
  );
};

export default CardSenario;
