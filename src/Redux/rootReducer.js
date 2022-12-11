import { combineReducers } from "redux";
import deviceReducer from "./devicesManage/devicesReducer";
import layoutReducer from "./layoutsHandler/layoutReducer";
import placeReducer from "./placeReducer/placeReducer";
import senarioReducer from "./senarioMange/senarioReducer";
import userReducer from "./user/userReducder";
import usersMngReducer from "./usersManage/usersMngReducer";

const rootReducer = combineReducers({
    layouts : layoutReducer,
    places: placeReducer,
    user: userReducer,
    devices: deviceReducer,
    usersMng: usersMngReducer,
    senario: senarioReducer,
});

export default rootReducer;