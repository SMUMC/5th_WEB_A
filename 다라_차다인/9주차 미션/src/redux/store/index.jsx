import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import userReducer from "../slices/userSlice";
import { persistReducer } from "redux-persist";
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
}

const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);