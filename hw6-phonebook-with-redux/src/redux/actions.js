import { Type } from "./types";
import { v1 as uuidv1 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

//redux
// export const addContact = (name, number) => ({
//   type: Type.ADD_CONTACT,
//   payload: { name, number, id: uuidv1() },
// });

// export const deleteContact = (id) => ({
//   type: Type.DELETE_CONTACT,
//   payload: id,
// });

// export const filterContacts = (filter) => ({
//   type: Type.FILTER_CONTACTS,
//   payload: filter,
// });

// export const getContactsFromLocalStorage = (contacts) => ({
//   type: Type.GET_CONTACTS_FROM_LOCAL_STORAGE,
//   payload: contacts,
// });

//redux-toolkit
export const addContact = createAction(Type.ADD_CONTACT, (name, number) => ({
  payload: { name, number, id: uuidv1() },
}));
export const deleteContact = createAction(Type.DELETE_CONTACT, (id) => ({
  payload: id,
}));
export const filterContacts = createAction(Type.FILTER_CONTACTS, (filter) => ({
  payload: filter,
}));
export const getContactsFromLocalStorage = createAction(
  Type.GET_CONTACTS_FROM_LOCAL_STORAGE,
  (contacts) => ({
    payload: contacts,
  })
);
