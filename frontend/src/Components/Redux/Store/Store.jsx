import cardItem from '../Reducer/Reducer'
import storage  from 'redux-persist/lib/storage';
import  { persistReducer } from 'redux-persist';
import {  createStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig={
    key:"root",
    version:1,
    storage
}

const persistedReducer = persistReducer( persistConfig ,cardItem)

const store = createStore(
    persistedReducer
);

const persistor = persistStore(store)

export  {store , persistor}