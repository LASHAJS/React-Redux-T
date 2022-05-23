import {createSlice} from '@reduxjs/toolkit'


const contactSlice = createSlice ({
  name: 'contact',
  initialState: [
    { id: 0, name: "31223423423", lastname: "asdasdasdasdasd", age: 1234567890, address: "asdasdasdasdasdas"},
    { id: 1, name: "31223423423", lastname: "asdasdasdasdasd", age: 1234567890, address: "asdasdasdasdasdas"},
      ],
  reducers: {
    addContact:(state, action) => {
      state.push(action.payload);
    },
    deleteContact:(state, action) => {  
      const {id} = action.payload;
      return state.filter(contact=> contact.id !== id);

    },
    updateContact:(state, action) => {
      return state.map((contact) =>contact.id === action.payload.id? action.payload : contact);
    },

  },

});
export const {addContact,deleteContact,updateContact} = contactSlice.actions;
export  default contactSlice.reducer;