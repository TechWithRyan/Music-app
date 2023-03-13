import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bulma/css/bulma.css";
import CookieConsent, { Cookies } from "react-cookie-consent";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="Cookie Box"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "20px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  
</CookieConsent>
    <App />
  </React.StrictMode>,
)
