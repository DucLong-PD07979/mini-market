import { combineReducers } from 'redux';
import basketReducer from './sliceBasket/basket.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['basket'],
};

const basketPersistConfig = {
    key: 'basket',
    storage,
    blacklist: 'toggle',
};

const rootReducers = combineReducers({
    basket: persistReducer(basketPersistConfig, basketReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default persistedReducer;
