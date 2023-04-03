import React from "react";
import {RouterProvider} from 'react-router-dom';
import { configRouters } from "./routers/routerConfig.js";

import GlobalStyle from "./style/GlobalStyle.js";

function App() {
  return (
      <GlobalStyle>
          <RouterProvider router={configRouters}></RouterProvider>
      </GlobalStyle>
  );
}

export default App;
