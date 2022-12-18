import React, { useState } from "react";
import { MyHeader, MyNavBar } from "./NavStyled";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import AddBox from "../Shared/AddBox/AddBox";
import { useDispatch, useSelector } from "react-redux";
import { MenuHandler } from "../../Redux/layoutsHandler/layoutAction";
import AddPlace from "../Modals/AddPlace/AddPlace";
import { Button } from "react-bootstrap";
import BoxPlaceSelect from "../Shared/BoxPlaceSelect/BoxPlaceSelect";
import { selectTarget } from "../../Redux/placeReducer/placeAction";
import { useEffect } from "react";
import useMqttConnection, { createConnection } from "../../mqtt/initMqtt";


const NavbarLay = () => {
  const menuActive = useSelector((state) => state.layouts.menu);
  const allTopic = useSelector(state => state.user.topics);
  const deviceInfo = useSelector(state => state.user.targetDevice);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const selectedPlaces = useSelector((state) => state.places.slectedPlace);


 const [client, payload, connectStatus] = useMqttConnection();


  const targetHandler = (id) => {
    console.log("bobo", id)
    dispatch(selectTarget(id));
  }

  const [connectionStatus, setConnectionStatus] = React.useState(false);
  const [messages, setMessages] = React.useState([]);

  useEffect(() => {
    if(allTopic.length !== 0){
      console.log(client, payload, connectStatus);
    }
  }, [connectStatus])

  return (
    <>
      <MyHeader className="glass_item" active={menuActive}>
        <span className="menu_icon" onClick={() => dispatch(MenuHandler())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path
              fill="#fff"
              d="M32,39.16C35.954,39.16 39.16,35.954 39.16,32C39.16,28.046 35.954,24.84 32,24.84C28.046,24.84 24.84,28.046 24.84,32C24.84,35.954 28.046,39.16 32,39.16Z"
              id="path_0"
            />
            <path
              fill="#fff"
              d="M32.09,19.07C36.044,19.07 39.25,15.864 39.25,11.91C39.25,7.956 36.044,4.75 32.09,4.75C28.136,4.75 24.93,7.956 24.93,11.91C24.93,15.864 28.136,19.07 32.09,19.07Z"
              id="path_1"
            />
            <path
              fill="#fff"
              d="M32.09,59.25C36.044,59.25 39.25,56.044 39.25,52.09C39.25,48.136 36.044,44.93 32.09,44.93C28.136,44.93 24.93,48.136 24.93,52.09C24.93,56.044 28.136,59.25 32.09,59.25Z"
              id="path_2"
            />
          </svg>
        </span>
        <MyNavBar>
          {allTopic.map((item) => (
            <BoxPlaceSelect key={item.id} name={item.title} icon={item.icon} id={item.id} onCilcked={targetHandler} />
          ))}

          <AddBox onClick={() => setModalShow(!modalShow)} />
        </MyNavBar>
        {/* modal */}
        <AddPlace open={modalShow} handleClose={() => setModalShow(false)} />
      </MyHeader>
    </>
  );
};

export default NavbarLay;
