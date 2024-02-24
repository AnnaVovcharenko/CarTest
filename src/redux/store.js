import { configureStore } from "@reduxjs/toolkit";
import { carRentReducer } from "./carsSlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: "adverts",
    storage,
    whitelist: ["favorites"],
};

  export const store = configureStore({
    reducer: {
        adverts: persistReducer(persistConfig, carRentReducer),
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),

});
export const persistor = persistStore(store);