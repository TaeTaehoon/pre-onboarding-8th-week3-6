import { combineReducers, configureStore } from "@reduxjs/toolkit";

import mainSlice from "./modules/mainSlice";

const reducer = combineReducers({ mainSlice });

export default configureStore({ reducer });
