import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import applicationReducer from "../slices/applicationSlice"

const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    application:applicationReducer,
})

export default rootReducer
