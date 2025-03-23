// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./reducers/userSlice";

// Root reducer
const rootReducer = combineReducers({
  user: userReducer,
});

// Persist configuration (Wrap the rootReducer instead of individual reducers)
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // Persist only 'user' slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store function
const store = configureStore({
  reducer: persistedReducer, // Apply persistReducer to the entire rootReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for Redux Persist
    }),
});

// Persistor instance
export const persistor = persistStore(store);

export default store;

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
