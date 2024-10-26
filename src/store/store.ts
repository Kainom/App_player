import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';


const persistConfig = {
    key: 'root',
    storage,
}


const saga = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);