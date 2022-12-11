import React, { useState } from "react";
import DualSim1FillIcon from "remixicon-react/DualSim1FillIcon";
import DualSim2FillIcon from "remixicon-react/DualSim2FillIcon";
import { TypeNumber } from "../../../utils/helper/helper";
import { InputCusMain } from "../../Shared/globalStyledComponents/globalStyledComponents";
import DefaultModal from "../DefaultModal/DefaultModal";
import { ContainerBtnTag, FormPassTag } from "./SettingStyle";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const SettingModal = ({ open, handleClose }) => {
  const [sim, setSim] = useState(1);

  return (
    <DefaultModal open={open} handleClose={handleClose} title={"تنظیمات"} noMinHeight={true}>
      <FormPassTag>
        <InputCusMain
          placeholder="رمز قدیم"
          type="text"
          onKeyDown={TypeNumber}
          height="50px"
        />
        <InputCusMain
          placeholder="رمز جدید"
          type="text"
          onKeyDown={TypeNumber}
          height="50px"
        />
      </FormPassTag>

      <ContainerBtnTag>
        <AddRoundedIcon  className="add_btn" />
        <div className="simcard_holder" >
          <DualSim2FillIcon
            onClick={() => setSim(2)}
            className={sim === 2 ? "act_icon" : ""}
          />
          <DualSim1FillIcon
            onClick={() => setSim(1)}
            className={sim === 1 ? "act_icon" : ""}
          />
        </div>
      </ContainerBtnTag>
    </DefaultModal>
  );
};

export default SettingModal;
