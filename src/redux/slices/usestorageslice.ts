"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserStorage {
  id: string;
  name: string;
  capacity: number;
  description: string;
  status: string;
  
}

interface UserProfileState {
  userProfile: UserStorage | null;
}

const initialState: UserProfileState = {
  userProfile: null,
};

export const Storagedata = createSlice({
  name: "Storagedata",
  initialState,
  
  reducers: {
    setStoragedata: (state, action: PayloadAction<UserStorage>) => {
      state.userProfile = action.payload;
    },
    clearStoragedata: (state) => {
      state.userProfile = null;
    },
  },
});

export const { setStoragedata, clearStoragedata } = Storagedata.actions;

export default Storagedata.reducer;



