// import { combineReducers } from "redux";
import { v1 as uuidv1 } from "uuid";

import { createReducer } from "@reduxjs/toolkit";

import { Type } from "../types";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  { id: "id-5", name: "Cavin Clein", number: "111-12-56" },
  { id: "id-6", name: "Cris Dior", number: "222-89-12" },
  { id: "id-7", name: "Gus Gussi", number: "333-17-79" },
  { id: "id-8", name: "Va Voronin", number: "444-91-26" },
];
//redux-toolkit

// const timer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

export const addDelContactReducer = createReducer(initialState, {
  [Type.ADD_CONTACT]: (state = initialState, { type, payload }) => [
    ...state,
    {
      name: payload.name,
      number: payload.number,
      id: payload.id,
    },
  ],
  [Type.DELETE_CONTACT]: (state = initialState, { type, payload }) =>
    state.filter((contact) => contact.id !== payload),

  [Type.GET_CONTACTS_FROM_LOCAL_STORAGE]: (
    state = initialState,
    { type, payload }
  ) => [...payload],
});

export const filterReducer = createReducer("", {
  [Type.FILTER_CONTACTS]: (state = "", { type, payload }) => (state = payload),
});

//redux
// export const addDelContactReducer = (
//   state = initialState,
//   { type, payload }
// ) => {
//   switch (type) {
//     case Type.ADD_CONTACT:
//       return [
//         ...state,
//         {
//           name: payload.name,
//           number: payload.number,
//           id: payload.id,
//         },
//       ];

//     case Type.DELETE_CONTACT:
//       return state.filter((contact) => contact.id !== payload);

//     case Type.GET_CONTACTS_FROM_LOCAL_STORAGE:
//       return [...payload];

//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case Type.FILTER_CONTACTS:
//       return (state = payload);
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: addDelContactReducer,
//   filter: filterReducer,
// });
