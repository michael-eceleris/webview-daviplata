import "./index.css";
import "./styles/style-320.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";

import { ImeiProvider } from "./providers/imei/imeiProvider";
import { SecureProvider } from "./providers/secure/secureProvider";

import Header from "./components/layout/Header";
import HomePage from "./pages/home/home-page";
import AllSecurePage from "./pages/all-secure/all-secure-page";
import ScreenSecurePage from "./pages/screen-secure/screen-secure-page";
import CheckImeiPage from "./pages/check-imei/check-imei-page";
import CheckSecurePage from "./pages/check-secure/check-secure-page";
import DetailsPurchase from "./pages/details-purchase/details-purchase-page";
import PurchaseComplete from "./pages/purchase-complete/purchase-complete-page";
import TermsConditionsScreenSecurePage from "./pages/terms-conditions-screen-secure/terms-conditions-screen-secure-page";
import TermsConditionsAllSecurePage from "./pages/terms-conditions-all-secure/terms-conditions-all-secure-page";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <SecureProvider>
            <ImeiProvider>
              <Route exact path={"/"} component={HomePage} />
              <Route exact path={"/all-secure"} component={AllSecurePage} />
              <Route
                exact
                path={"/screen-secure"}
                component={ScreenSecurePage}
              />
              <Route exact path={"/check-imei"} component={CheckImeiPage} />
              <Route exact path={"/check-secure"} component={CheckSecurePage} />
              <Route
                exact
                path={"/details-purchase"}
                component={DetailsPurchase}
              />
              <Route
                exact
                path={"/complete-purchase"}
                component={PurchaseComplete}
              />
              <Route
                exact
                path={"/screen-secure-terms-condition"}
                component={TermsConditionsScreenSecurePage}
              />
              <Route
                exact
                path={"/all-secure-terms-condition"}
                component={TermsConditionsAllSecurePage}
              />
            </ImeiProvider>
          </SecureProvider>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
