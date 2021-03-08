import { combineReducers } from "redux";
import { advertReducer } from "./advertReducer";
import { userReducer } from "./userReducer";


const rootReducer = combineReducers({
    adverts: advertReducer,
    user: userReducer
})

export default rootReducer