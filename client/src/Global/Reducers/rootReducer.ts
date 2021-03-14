import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { advertReducer } from "./advertReducer";
import { userReducer } from "./userReducer";


const rootReducer = combineReducers({
    adverts: advertReducer,
    user: userReducer,
    admin: adminReducer
})

export default rootReducer