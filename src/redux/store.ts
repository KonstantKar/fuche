import {
  CombinedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import librarySlice from "./librarySlice";

export type RootState = CombinedState<{
  library: ReturnType<typeof librarySlice>;
}>;

const rootReducer = combineReducers({
  library: librarySlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
