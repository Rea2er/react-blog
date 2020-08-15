import React from "react";
import { Provider } from "react-redux";

import Header from "./components/header";
import GlobalStyle from "./style";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
    </Provider>
  );
};

export default App;
