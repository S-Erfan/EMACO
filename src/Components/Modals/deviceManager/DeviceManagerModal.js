import React from "react";
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
              <Box sx={{mt: 2,}}>
                <DeviceForm />
              </Box>
              <Box sx={{mt: 2,}}>
                <ShowDevices />
              </Box>
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default DeviceManagerModal;
