import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Detail from "./pages/detail";
import Header from "./components/header";
import GlobalStyle from "./style";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
      </Router>
    </Provider>
  );
};

export default App;
