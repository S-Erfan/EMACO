import React, { useState } from "react";
import styles from "./styles.module.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddPlace from "../Modals/AddPlace/AddPlace";

const AddPlaceB = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div onClick={() => setModalShow(true)} className={`${styles.container} glass_item `}>
        <AddRoundedIcon />
      </div>
      <AddPlace open={modalShow} handleClose={() => setModalShow(false)} />
    </>
  );
};

export default AddPlaceB;
