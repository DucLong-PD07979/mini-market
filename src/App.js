import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { configRouters } from './routers/routerConfig.js';

import GlobalStyle from './style/GlobalStyle.js';
import { store,persistor } from './store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyle>
                    <RouterProvider router={configRouters}></RouterProvider>
                </GlobalStyle>
            </PersistGate>
        </Provider>
    );
}

export default App;
