import { Box } from "@mui/system";
import React from "react";
import DefaultModal from "../DefaultModal/DefaultModal";
import EquipmentList from "./EquipmentList";
import { MainBodyModal } from "./Styles";
import TargetPlace from "./TargetPlace";

const EquipmentModal = ({ open, handleClose }) => {
  return (
    <DefaultModal open={open} handleClose={handleClose} title={"ایجاد تجهیزات"}>
      <MainBodyModal>
        <TargetPlace />
        <EquipmentList />
      </MainBodyModal>
    </DefaultModal>
  );
};

export default EquipmentModal;
