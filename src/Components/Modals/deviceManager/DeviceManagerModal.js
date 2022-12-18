import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ThemeProvider } from "@mui/material";
import theme from "../../../MUI/themeMui";
import DeviceForm from "./DeviceForm";
import ShowDevices from "./ShowDevices";
import callApi from "../../../utils/callApi/callApi";
import { DEVICE_LIST, TOPIC_INFO } from "../../../utils/ApiRoute/apiRoutes";
import { useSelector } from "react-redux";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "600px",
  minHeight: "450px",
  bgcolor: "var(--bg-dark)",
  color: "#fff",
  borderRadius: 2,
  outline: "none",
  border: "none",
  boxShadow: 24,
  px: 2,
  py: 1,
};

const DeviceManagerModal = ({ open, handleClose }) => {
  const allDevice = useSelector(state => state.user);

  // const [deviceList, setDeviceList] = useState([]);

  // const fetchListDevice = async () => {
  //   const { data, status } = await callApi(DEVICE_LIST, true, "{}", "get");
  //   console.log(data);
  //   console.log(status);
  //   setDeviceList(data);
  // };

  const [client, setClient] = useState(null);

  const { host, port, endpoint, clientId, ...options } = {
    clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
    host: "panel.ema.co.ir",
    port: 18833,
    clean: true, // Reserved session
    protocolId: "MQTT",
    protocol: "mqtts",
    // connectTimeout: 4000, // Time out
    // reconnectPeriod: 4000, // Reconnection interval
    username: "d3e2328ec9a747a6a31d369793d4f567",
    password: "49fe6002a91348aca1f7411ea3e9dc06",
  };

  // const mqttConnect = () => {
  //   const connectUrl = `ws://${host}:${port}`;
  //   console.log("Connecting");
  //   try {
  //     setClient(mqtt.connect(connectUrl, options));
  //   } catch (err) {
  //     console.log("mqtt.connect faield", err)
  //   }
  // };

  useEffect(() => {
    
  }, []);

  const getAllTopic = async () => {
    const { data, status } = await callApi(
      TOPIC_INFO("serial19"),
      true,
      "{}",
      "get"
    );
    console.log(data);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                مدیریت دستگاه ها
                <CloseRoundedIcon
                  sx={{ cursor: "pointer", color: "var(--main-color)" }}
                  onClick={() => handleClose()}
                />
              </Typography>
              {/* <div onClick={getAllTopic}>bobo</div> */}
              <Box sx={{ mt: 2 }}>{/* <DeviceForm /> */}</Box>
              <Box sx={{ mt: 2 }}>
                <ShowDevices devices={allDevice.devices} />
              </Box>
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default DeviceManagerModal;
