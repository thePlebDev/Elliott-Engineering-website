import React from "react";
import {createRoot} from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./Styles/globalStyles";
import {loadStripe} from '@stripe/stripe-js';

import theme from "./Styles/themes";

import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';


import App from "./Components/App";

const root = createRoot(document.getElementById("root"))

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

root.render(
    <Router>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Elements stripe={stripePromise}>
                <App/>
            </Elements>
        </ThemeProvider>
    </Router>
    )