import "./index.css";
import "./styles/style-320.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import HomePage from "./pages/home/home-page";
import AllSecurePage from "./pages/all-secure/all-secure-page";
import ScreenSecurePage from "./pages/screen-secure/screen-secure-page";
import CheckImeiPage from "./pages/check-imei/check-imei-page";
import CheckSecurePage from "./pages/check-secure/check-secure-page";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/all-secure"} component={AllSecurePage} />
        <Route exact path={"/screen-secure"} component={ScreenSecurePage} />
        <Route exact path={"/check-imei"} component={CheckImeiPage} />
        <Route exact path={"/check-secure"} component={CheckSecurePage} />
      </Switch>
    </Router>
  );
}

export default App;
