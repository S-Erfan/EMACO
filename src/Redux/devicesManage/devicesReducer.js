const initialState = {
  devices: [],
};

const deviceReducer = (state = initialState, action) => {
  const { type, preload, id } = action;

  switch (type) {
    case "ADD_DEVICE":
      const listDevice = [...state.devices, preload];
      const uniqIdList = listDevice.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      return { ...state, devices: uniqIdList };
    case "DELETE_DEVICE":
      const result = state.devices.filter((item) => item.id !== id);
      return { ...state, devices: result };
    case "EDIT_DEVICE":
      const allDevices = state.devices;
      const deviceIndex = allDevices.findIndex((item) => item.id === id);
      const newObj = { ...preload, id: allDevices[deviceIndex].id };
      console.log(newObj);
      allDevices[deviceIndex] = newObj;
      console.log(allDevices);
      return {...state, devices: allDevices}
    default:
      return state;
  }
};

export default deviceReducer;
