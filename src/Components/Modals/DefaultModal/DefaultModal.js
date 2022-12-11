import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ThemeProvider } from "@mui/material";
import theme from "../../../MUI/themeMui";
import SliderModal from "../../Shared/SliderModal/SliderModal";
import SliderSelectPlace from "../../Shared/SliderSelectPlace/SliderSelectPlace";


const DefaultModal = ({ open, handleClose, children, title, noMinHeight }) => {
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    minHeight: noMinHeight ? "unset" : "450px",
    bgcolor: "var(--bg-dark)",
    color: "#fff",
    borderRadius: 2,
    outline: "none",
    border: "none",
    boxShadow: 24,
    px: 2,
    py: 1,
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
                {title}
                <CloseRoundedIcon
                  sx={{ cursor: "pointer", color: "var(--main-color)" }}
                  onClick={() => handleClose()}
                />
              </Typography>
              {children}
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default DefaultModal;
