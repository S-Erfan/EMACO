import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import DraftLineIcon from "remixicon-react/DraftLineIcon";
import DualSim1FillIcon from "remixicon-react/DualSim1FillIcon";
import DualSim2FillIcon from "remixicon-react/DualSim2FillIcon";
import {
  deleteDevice,
  editDevice,
} from "../../../Redux/devicesManage/devicesAction";
import { TypeNumber, TypepersianNumber } from "../../../utils/helper/helper";
import notify from "../../../utils/toast/notify";
import { InputCusMain } from "../../Shared/globalStyledComponents/globalStyledComponents";
import { DeviceCard } from "./DeviceStyled";

const CardDevice = ({ name, phone, pass, sim, id }) => {
  const dispatch = useDispatch();

  const [nameC, setName] = useState(name);
  const [phoneC, setPhone] = useState(phone);
  const [passC, setPass] = useState(pass);

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

  const editHandler = () => {
    if(nameC === "" || passC === "" || phoneC === ""){
        notify("موارد خاسته شده را وارد کنید.", "error")
    }else{
        dispatch(editDevice(id, { name: nameC, pass: passC, phone: phoneC, sim }));
        notify("تغییرات با موفقیت ثبت شد.", "success")
    }
  };

  return (
    <>
      <DeviceCard>
        <div className="input_holder">
          <InputCusMain
            placeholder="نام دستگاه"
            name="name-d"
            value={nameC}
            onChange={changeHandler}
            type="text"
          />
          <InputCusMain
            placeholder="شماره دستگاه"
            name="phone-d"
            value={phoneC}
            onChange={changeHandler}
            type="text"
            onKeyDown={TypeNumber}
          />
          <InputCusMain
            placeholder="رمز پیامکی"
            name="pass-d"
            value={passC}
            onChange={changeHandler}
            type="text"
            onKeyDown={TypeNumber}
          />
        </div>
        <div className="icons_holder">
          <DraftLineIcon onClick={editHandler} />

          <DeleteBin6LineIcon onClick={() => dispatch(deleteDevice(id))} />

          {sim === 1 ? (
            <DualSim1FillIcon className="sim" />
          ) : (
            <DualSim2FillIcon className="sim" />
          )}
        </div>
      </DeviceCard>
    </>
  );
};

export default CardDevice;
