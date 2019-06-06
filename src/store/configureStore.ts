import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from "redux-devtools-extension";
import { createRootReducer } from '../reducers';
import { history } from "./history";
import {State} from "./state";

export function configureStore(initialState?: State) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middleware = [
        thunk,
        reactRouterMiddleware
    ];

    return createStore<State>(
        createRootReducer(history),
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
}