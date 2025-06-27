import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RegisterReducer from './slices/RegisterReducer'
import CartReducer from './slices/CartReducer'
import WishlistReducer from './slices/WishlistReducer'
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
 

const rootReducer = combineReducers({
    user: RegisterReducer,
    cart: CartReducer,
    wishlist:WishlistReducer
  });

  const persistConfig = {
    key: "root",
    storage,
};

const persistReducers = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    
})


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;