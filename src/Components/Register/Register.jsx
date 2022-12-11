import React, { useState } from "react";
import { MainRegister } from "./RegisterStyle";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/emacoLogo.png";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { useDispatch } from "react-redux";
import { TypeNumber } from "../../utils/helper/helper";
import { authUser } from "../../Redux/user/userAction";
import { getTokenLocal } from "../../utils/token/userToken";
import notify from "../../utils/toast/notify";

const txtF = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& label": {
    color: "#fff",
    textAlign: "right",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
        color: "#fff"
    },
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
      borderWidth: "1px"
    },
  },
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Register = () => {

  const dispatch = useDispatch();

  const [phone, setPhone] = useState("");
  const [password, setPasword] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;

    switch (name) {
      case "PHONE":
        setPhone(value);
        break;
      case "PASSWORD":
        setPasword(value);
        break;
      default:
        break;
    };
  }

  const subHandler = () => {
    if(phone === "" && password === ""){
      notify("تمام فیلد ها را پر کنید", "error")
    }else {
      dispatch(authUser(phone, password));
    }
  }

  return (
    <MainRegister>
      <div className="box">
        <div className="title">
          <span>
            <img src={logo} alt="logo" />
          </span>
          <span>سیستم مدریت هوشمند</span>
          <span className="co_name">EMACO</span>
        </div>
        <CacheProvider value={cacheRtl} >
          <ThemeProvider theme={txtF}>
            <div className="form" dir="rtl">
              <CssTextField
                id="outlined-name"
                label="نام کاربری"
                value={phone}
                name="PHONE"
                onChange={handleChange}
                // onKeyDown={TypeNumber}
              />
              <CssTextField
                id="outlined-name"
                label="رمز عبور"
                name="PASSWORD"
                value={password}
                onChange={handleChange}
              />
            </div>
          </ThemeProvider>
        </CacheProvider>
        <div className="btnHandler">
          <Button variant="outline-warning" onClick={subHandler}>
            ورود
            <LogoutRoundedIcon />
          </Button>
        </div>
      </div>
    </MainRegister>
  );
};

export default Register;
