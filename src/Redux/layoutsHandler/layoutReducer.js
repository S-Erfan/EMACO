const initializeState = {
    menu: false
};

const layoutReducer = (state = initializeState, action) => {
    const { type } = action;
    switch (type) {
        case "MENU":
            return {...state, menu: !state.menu}
        default:
            return state;
    }
};

export default layoutReducer;