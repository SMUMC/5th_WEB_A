import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import { PERSIST, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";

// export default configureStore({
//     reducer: {
//         login: loginReducer,
//         user: userReducer,
//     }
// });

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["login"],
}

const rootReducer = combineReducers({
    login: loginReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    // non-serializable error solution
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});

export const persistor = persistStore(store);