import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//any components that will be wrapped around the element components provided with stripe, will get the elements from stripe.
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
import { store, } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
        <Elements stripe={stripePromise}>
        <App />
        </Elements>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
