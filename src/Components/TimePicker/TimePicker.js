import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  ThemeProvider,
} from "@mui/material";
import theme from "../../MUI/themeMui";
import { BTNselecte, ContainerTimer } from "./TimeStyle";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ClockPicker } from "@mui/x-date-pickers/ClockPicker";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { MobileTimePicker, TimePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/system";
import MuiTimePicker from "./MuiTimePicker";

const TimePickerSection = () => {
  const defDate = new Date().getHours();

  const [dateStart, setDateStart] = useState(dayjs('2022-04-07'));
  const [dateEnd, setDateEnd] = useState(dayjs('2022-04-07'));

  return (
    <ContainerTimer>
      <ThemeProvider theme={theme}>
        <div className="nav">
          <div className="first_">
            <BTNselecte>
              <p>تجهیز مورد نظر را انتخاب کنید.</p>
            </BTNselecte>
            <span>
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "var(--form-text)",
                  },
                }}
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#fff",
                      padding: 0,
                      "&.Mui-checked": {
                        color: "var(--main-color)",
                      },
                    }}
                  />
                }
                label="تکرار"
              />
            </span>
          </div>
          <div className="icons_btn">
            <CalendarMonthRoundedIcon />
            <DeleteBin6LineIcon />
            <AddRoundedIcon onClick={() => console.log(dateEnd)} />
          </div>
        </div>

        <div className="times_holder">
          <div className="start">
            <MuiTimePicker value={dateStart} setValue={setDateStart} />
          </div>
          <div className="end">
            <MuiTimePicker value={dateEnd} setValue={setDateEnd} />
          </div>
        </div>
      </ThemeProvider>
    </ContainerTimer>
  );
};

export default TimePickerSection;
