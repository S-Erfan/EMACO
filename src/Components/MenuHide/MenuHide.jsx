import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MyMenuSide } from "./MenuStyle";
import logoEmaco from "../../assets/images/emacoLogo.png";
import DeviceManagerModal from "../Modals/deviceManager/DeviceManagerModal";
import UsersManager from "../Modals/UsersMange/UsersManager";
import DeviceIconCus from "../Shared/CustomIcons/DeviceIconCus";
import UserIconCus from "../Shared/CustomIcons/UserIconCus";
import ScenarioIconCus from "../Shared/CustomIcons/ScenarioIconCus";
import HistoryIconCus from "../Shared/CustomIcons/HistoryIconCus";
import SettingIconCus from "../Shared/CustomIcons/SettingIconCus";
import SettingModal from "../Modals/SettingModal/SettingModal";
import SenarioModal from "../Modals/SenarioModal/SenarioModal";

const MenuHide = () => {
  const menuActive = useSelector((state) => state.layouts.menu);

  const [deviceMng, setDeviceMng] = useState(false);
  
  const [senarioModal, setSenarioModal] = useState(false);

  const [userMng, setUserMng] = useState(false);
  const [settingMod, setSettingMod] = useState(false);

  return (
    <>
      <div className={`show_menu ${menuActive ? "act" : ""}`}>
        <MyMenuSide>
          <div className="logo_containe">
            <img src={logoEmaco} alt="logo" />
            <span>EMACO</span>
          </div>
          <ul>
            <li onClick={() => setDeviceMng(true)}>
              دستگاه های من
              <DeviceIconCus width={"35px"} height={"35px"} />
            </li>
            <li onClick={() => setUserMng(true)}>
              کاربر های من
              <UserIconCus width={"35px"} height={"35px"} className="userIcon_custom" />
            </li>
            <li onClick={() => setSenarioModal(true)} >
              سناریو
              <ScenarioIconCus width={"35px"} height={"35px"} className="userIcon_custom" />
            </li>
            <li>
              تاریخچه
              <HistoryIconCus width={"35px"} height={"35px"} className="historyIcon_custom" />
            </li>
            <li onClick={() => setSettingMod(true)}>
              تنظیمات
              <SettingIconCus width={"35px"} height={"35px"} className="userIcon_custom" />
            </li>
          </ul>
        </MyMenuSide>
      </div>
      <DeviceManagerModal
        open={deviceMng}
        handleClose={() => setDeviceMng(false)}
      />
      <UsersManager open={userMng} handleClose={() => setUserMng(false)} />
      <SettingModal open={settingMod} handleClose={() => setSettingMod(false)} />
      <SenarioModal open={senarioModal} handleClose={() => setSenarioModal(false)} /> 
    </>
  );
};

export default MenuHide;
