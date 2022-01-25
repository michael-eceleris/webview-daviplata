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
import PrivateRoute from "./components/routes/PrivateRoute";

import Header from "./components/layout/Header";
import HomePage from "./pages/home/home-page";
import AllSecurePage from "./pages/all-secure/all-secure-page";
import ScreenSecurePage from "./pages/screen-secure/screen-secure-page";
import CheckImeiPage from "./pages/check-imei/check-imei-page";
import CheckSecurePage from "./pages/check-secure/check-secure-page";
import DetailsPurchase from "./pages/details-purchase/details-purchase-page";
import PurchaseComplete from "./pages/purchase-complete/purchase-complete-page";
import PurchaseConfirmation from "./pages/purchase-confirmation/purchase-confirmation-page";
import TermsConditionsScreenSecurePage from "./pages/terms-conditions-screen-secure/terms-conditions-screen-secure-page";
import TermsConditionsAllSecurePage from "./pages/terms-conditions-all-secure/terms-conditions-all-secure-page";
import IncompatiblePage from "./pages/incompatible/incompatible-page";
import WithoutKeyPage from "./pages/without-key/without-key-page";

import HomeDaviplataAppPage from "./pages/home-daviplata-app/home-daviplata-app-page";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <SecureProvider>
            <ImeiProvider>
              <Route exact path={"/"}>
                <PrivateRoute component={WithoutKeyPage} />
              </Route>
              <PrivateRoute exact path={"/:key"} component={HomePage} />
              <PrivateRoute
                exact
                path={"/:key/all-secure"}
                component={AllSecurePage}
              />
              <PrivateRoute
                exact
                path={"/:key/screen-secure"}
                component={ScreenSecurePage}
              />
              <PrivateRoute
                exact
                path={"/:key/check-imei"}
                component={CheckImeiPage}
              />
              <PrivateRoute
                exact
                path={"/:key/check-secure"}
                component={CheckSecurePage}
              />
              <PrivateRoute
                exact
                path={"/:key/details-purchase"}
                component={DetailsPurchase}
              />
              <PrivateRoute
                exact
                path={"/:key/complete-purchase"}
                component={PurchaseComplete}
              />
              <PrivateRoute
                exact
                path={"/:key/confirmation-purchase"}
                component={PurchaseConfirmation}
              />
              <PrivateRoute
                exact
                path={"/:key/screen-secure-terms-condition"}
                component={TermsConditionsScreenSecurePage}
              />
              <PrivateRoute
                exact
                path={"/:key/all-secure-terms-condition"}
                component={TermsConditionsAllSecurePage}
              />
              <PrivateRoute
                exact
                path={"/:key/home-daviplata-app"}
                component={HomeDaviplataAppPage}
              />
              <Route
                exact
                path={"/incompatible"}
                component={IncompatiblePage}
              />
            </ImeiProvider>
          </SecureProvider>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
