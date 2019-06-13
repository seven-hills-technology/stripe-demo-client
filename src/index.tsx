import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {Elements, StripeProvider} from 'react-stripe-elements';

import { store } from "./store/store"
import { history } from "./store/history"
import {ConnectedApp} from "./components/app";
import {ConnectedStripeCheckout} from './components/stripeCheckout';

declare const STRIPE_PUBLISHABLE_KEY: string;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <StripeProvider apiKey={STRIPE_PUBLISHABLE_KEY}>
                <>
                    <ConnectedApp />
                    <Elements>
                        <ConnectedStripeCheckout />
                    </Elements>
                </>
            </StripeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);