import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeviceForGetTopic, setDeviceTarget } from "../../../Redux/user/userAction";
import CardDevice from "./CardDevice";
import { GroundDevices } from "./DeviceStyled";

const ShowDevices = ({devices}) => {
  const devicesRedux = useSelector((state) => state.devices.devices);
  const dispatch = useDispatch();

  const setTarget = (obj) => {
    console.log("bobobobo")
    dispatch(setDeviceForGetTopic(obj))
  }

  return (
    <GroundDevices>
      {devices.map((item) => (
        <CardDevice
          key={item.date_joined}
          admin={item.is_admin}
          name={item.title}
          pass={item.mqtt_pass}
          phone={item.mqtt_pass}
          id={item.id}
          sim={item.serial}
          onClicked={() => setTarget(item)}
        />
      ))}
      {/* {devices.map((item) => (
        <CardDevice
          key={item.date_joined}
          admin={item.is_admin}
          name={item.title}
          pass={item.mqtt_pass}
          phone={item.mqtt_pass}
          id={item.id}
          sim={item.sim}
        />
      ))}
      {devices.map((item) => (
        <CardDevice
          key={item.date_joined}
          admin={item.is_admin}
          name={item.title}
          pass={item.mqtt_pass}
          phone={item.mqtt_pass}
          id={item.id}
          sim={item.sim}
        />
      ))}
      {devices.map((item) => (
        <CardDevice
          key={item.date_joined}
          admin={item.is_admin}
          name={item.title}
          pass={item.mqtt_pass}
          phone={item.mqtt_pass}
          id={item.id}
          sim={item.sim}
        />
      ))}
      {devices.map((item) => (
        <CardDevice
          key={item.date_joined}
          admin={item.is_admin}
          name={item.title}
          pass={item.mqtt_pass}
          phone={item.mqtt_pass}
          id={item.id}
          sim={item.sim}
        />
      ))}
      {devices.map((item) => (
        <CardDevice
          key={item.date_joined}
          admin={item.is_admin}
          name={item.title}
          pass={item.mqtt_pass}
          phone={item.mqtt_pass}
          id={item.id}
          sim={item.sim}
        />
      ))}
      {devices.map((item) => (
        <CardDevice
          key={item.date_joined}
          admin={item.is_admin}
          name={item.title}
          pass={item.mqtt_pass}
          phone={item.mqtt_pass}
          id={item.id}
          sim={item.sim}
        />
      ))}
      {devices.map((item) => (
        <CardDevice
          key={item.date_joined}
          admin={item.is_admin}
          name={item.title}
          pass={item.mqtt_pass}
          phone={item.mqtt_pass}
          id={item.id}
          sim={item.sim}
        />
      ))} */}
    </GroundDevices>
  );
};

export default ShowDevices;
