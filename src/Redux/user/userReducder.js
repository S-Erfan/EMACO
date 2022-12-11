const initialState = {
    loginStatus: true,
    loader: false,
    info: "" 
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
        default:
            return state;
    };

};

export default userReducer;
