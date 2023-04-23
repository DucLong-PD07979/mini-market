import { createStore } from 'redux';
import rootReducers from './rootReducer';

import { persistStore } from 'redux-persist';

export const store = createStore(rootReducers);
export const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

