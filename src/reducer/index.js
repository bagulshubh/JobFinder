import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import applicationReducer from "../slices/applicationSlice"
import errorReducer from '../slices/error'

const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    application:applicationReducer,
    error:errorReducer,
})

export default rootReducer
