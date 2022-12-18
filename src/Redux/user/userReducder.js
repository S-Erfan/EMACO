const initialState = {
    loginStatus: false,
    loader: false,
    info: "" ,
    devices: [],
    targetDevice: "",
    topics: [],
};

const userReducer = (state= initialState, action) => {
    const {type, preload} = action;

    switch (type) {
        case "LOADER_TRUE":
            return {...state, loader: true}
        case "LOADER_FALSE":
            return {...state, loader: false}
        case "LOGIN_USER": 
            return {...state, loginStatus: true, info: preload}
        case "GET_ALL_DEVICE":
            return {...state, devices: preload};
        case "SET_TARGET_DEVICE":
            return {...state, targetDevice: preload};
        case "SET_ALL_TOPIC": 
            return {...state, topics: preload}
        default:
            return state;
    };

};

export default userReducer;
