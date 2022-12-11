import React, { useState } from "react";
import { InputCusMain } from "../../Shared/globalStyledComponents/globalStyledComponents";
import { MainDivForm } from "./DeviceStyled";
import DualSim1FillIcon from "remixicon-react/DualSim1FillIcon";
import DualSim2FillIcon from "remixicon-react/DualSim2FillIcon";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { TypeNumber, TypepersianNumber } from "../../../utils/helper/helper";
import notify from "../../../utils/toast/notify";
import { useDispatch } from "react-redux";
import { addDevice } from "../../../Redux/devicesManage/devicesAction";

const DeviceForm = () => {

    const dispatch = useDispatch();

  const [sim, setSim] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name-d":
        setName(value);
        break;
      case "phone-d":
        setPhone(TypepersianNumber(value));
        break;
      case "pass-d":
        setPass(TypepersianNumber(value));
        break;
      default:
        break;
    }
  };

  const subHandler =(e) =>{
    e.preventDefault();
    if(name === "" || pass === "" || phone === "") {
        notify("موارد خاسته شده را وارد کنید.", "error")
    }else {
        dispatch(addDevice(name, phone, pass, sim));
        setPass("");
        setPhone("");
        setName("");
        notify("اطلاعات دستگاه با موفقیت ثبت شد.", "success");
    }

}

  return (
    <MainDivForm onSubmit={subHandler} >
      <InputCusMain
        placeholder="نام دستگاه"
        name="name-d"
        value={name}
        onChange={changeHandler}
        type="text"
      />
      <InputCusMain
        placeholder="شماره دستگاه"
        name="phone-d"
        value={phone}
        onChange={changeHandler}
        type="text"
        onKeyDown={TypeNumber}
      />
      <InputCusMain
        placeholder="رمز پیامکی"
        name="pass-d"
        value={pass}
        onChange={changeHandler}
        type="text"
        onKeyDown={TypeNumber}
      />
      <div className="btnHolder">
        <AddRoundedIcon className="add_btn" onClick={subHandler} />
        <div className="icons-holder">
          <DualSim2FillIcon
            onClick={() => setSim(2)}
            className={sim === 2 ? "act_icon" : ""}
          />
          <DualSim1FillIcon
            onClick={() => setSim(1)}
            className={sim === 1 ? "act_icon" : ""}
          />
        </div>
      </div>
    </MainDivForm>
  );
};

export default DeviceForm;
