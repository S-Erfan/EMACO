import React from "react";
import { useSelector } from "react-redux";
import CardDevice from "./CardDevice";
import { GroundDevices } from "./DeviceStyled";

const ShowDevices = () => {
  const devicesRedux = useSelector((state) => state.devices.devices);

  return (
    <GroundDevices>
      {devicesRedux.map((item) => (
        <CardDevice
          key={item.id}
          name={item.name}
          pass={item.pass}
          phone={item.phone}
          id={item.id}
          sim={item.sim}
        />
      ))}
    </GroundDevices>
  );
};

export default ShowDevices;
