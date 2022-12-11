export const addDevice = (name, phone, pass, sim) => {
    return {type: "ADD_DEVICE", preload: {name, phone, pass, sim}}
};

export const deleteDevice = (id) => {
    return {type: "DELETE_DEVICE", id}
};

export const editDevice = (id, obj) =>{
    return {type: "EDIT_DEVICE", id, preload: obj}
};

