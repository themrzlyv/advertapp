import { combineReducers } from "redux";
import { advertReducer } from "./advertReducer";


const rootReducer = combineReducers({
    adverts: advertReducer
})

export default rootReducer