import { Switch } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { CardActionsMainTag } from "./SenarioStyles";

const CardActions = ({
  title,
  place,
  number,
  onClick,
  id,
  resetState,
  status,
}) => {
  const [select, setSelect] = useState(false);
  const [checked, setChacked] = useState(false);

  const clickHandler = (e) => {
    setSelect(!select);
    onClick(e, id);
  };

  const YellowSwitch = styled(Switch)({
    "& .MuiSwitch-switchBase": {
      color: "#808080",
      transition: "left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#e3a008",
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#e3a008",
    },
  });


  if (status === "act")
    return (
      <CardActionsMainTag forAct>
        <h3>{title}</h3>
        <h6>{place}</h6>
        <div className="switch_holder">
          <YellowSwitch
            checked={checked}
            onChange={(e) => setChacked(e.target.checked)}
            size="small"
            sx={{ palette: { primary: { main: "#e3a008" } } }}
          />
          <span className="count">{number}</span>
        </div>
      </CardActionsMainTag>
    );

  return (
    <CardActionsMainTag onClick={clickHandler} active={select}>
      <h3>{title}</h3>
      <h6>{place}</h6>
      <div className="number_holder">
        <span>{number}</span>
      </div>
    </CardActionsMainTag>
  );
};

export default CardActions;
