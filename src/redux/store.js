import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"],
};

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);
const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersReducer
);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: persistedContactsReducer,
  filters: persistedFiltersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
