import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface librarySlice {}

const initialState: librarySlice = {};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {},
});

export const {} = librarySlice.actions;

export default librarySlice.reducer;
