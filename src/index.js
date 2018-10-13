import React from "react";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
import { render } from "react-dom";

import configureStore from "./configureStore";

export const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
