import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-yldurudxsvokt3qe.us.auth0.com"
    clientId="nMRW9cpYRuiTeJ5LAT8NgQ0Ie1Kb3Kja"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/'
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);