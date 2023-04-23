import {combineReducers} from 'redux';
import basketReducer from './sliceBasket/basket.reducer';

const rootReducers = combineReducers({
    basket: basketReducer,
});

export default rootReducers;