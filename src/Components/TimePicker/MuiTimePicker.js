import { TextField } from "@mui/material";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { alpha, styled, ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";

const MuiTimePicker = ({ value, setValue }) => {
  const SuccessSlider = styled(MobileTimePicker)(({ theme }) => ({
    width: "100%",
    height: "100%",
    "& .MuiOutlinedInput-root": {
      color: "var(--main-color)",
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      textAlign: "center",
      fontSize: "25px",
    },
    "& .MuiOutlinedInput-input": {
      width: "100%",
      height: "100%",
      display: "grid",
      placeItems: "center",
      padding: "0 !important",
      textAlign: "center",
      lineHeight: "25px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      outline: "none",
    },
  }));

  const myThem = createTheme({
    palette: {
      primary: { main: "#e3a008" },
    },
  });

  myThem.components = {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "var(--bg-dark)",
          direction: "ltr",
          color: "#fff",
          "& .MuiTypography": {
            color: "#fff",
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={myThem}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SuccessSlider
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          ampm={false}
          renderInput={(params) => <TextField {...params} />}
          popperSx={{ background: "#000" }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default MuiTimePicker;
