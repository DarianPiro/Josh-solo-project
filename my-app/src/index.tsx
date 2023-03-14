import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='dev-yldurudxsvokt3qe.us.auth0.com'
    clientId='nMRW9cpYRuiTeJ5LAT8NgQ0Ie1Kb3Kja'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    >
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

