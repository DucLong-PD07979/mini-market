import React from "react";
import {RouterProvider} from 'react-router-dom';
import { configRouters } from "./routers/routerConfig.js";

import GlobalStyle from "./style/GlobalStyle.js";
import store from "./store/index.js";
import {Provider} from 'react-redux';

function App() {
  return (
      <Provider store={store}>
          <GlobalStyle>
              <RouterProvider router={configRouters}></RouterProvider>
          </GlobalStyle>
      </Provider>
  );
}

export default App;
