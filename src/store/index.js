import { configureStore,combineReducers } from '@reduxjs/toolkit';
import videoSlice from './video/videoSlice';
/* import storage from "redux-persist/lib/storage"; */
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from "redux-persist";
const persistConfig =  {
    key: "root",  
    storage:storageSession,
    whitelist: ["video"],
  };

const rootReducer  = combineReducers({
    video:videoSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>  getDefaultMiddleware({
        serializableCheck:false,
      })
})

export default store;