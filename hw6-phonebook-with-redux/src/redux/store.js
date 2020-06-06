// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { addDelContactReducer, filterReducer } from "./reducers/reducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
//redux
// const store = createStore(rootReducer, devToolsEnhancer());


//redux-toolkit
const store = configureStore({
  reducer: {
    contacts: addDelContactReducer,
    filter: filterReducer,
  },
});

export default store;
