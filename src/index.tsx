import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {StripeProvider} from 'react-stripe-elements';

import { store } from "./store/store"
import { history } from "./store/history"
import {ConnectedApp} from "./components/app";

declare const STRIPE_PUBLISHABLE_KEY: string;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <StripeProvider apiKey={STRIPE_PUBLISHABLE_KEY}>
                <ConnectedApp />
            </StripeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);