import React from 'react'
import {connect, Dispatch} from "react-redux";
import {bindActionCreators} from 'redux';
import {Elements} from 'react-stripe-elements';

import {State} from '../store/state';
import {ConnectedAppForm} from './appForm';
import {submitAppForm} from '../actionCreators/appActionCreators';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapActionToProps>;

export interface OwnProps {

}

type AllProps = StateProps & DispatchProps & OwnProps;

export function App(props: AllProps) {
    return (
        <Elements>
            <ConnectedAppForm onSubmit={props.actions.submitAppForm}/>
        </Elements>
    );
}

function mapStateToProps(state: State) {
    return {

    };
}

function mapActionToProps(dispatch: Dispatch<State>) {
    return {
        actions: bindActionCreators({submitAppForm}, dispatch)
    };
}


export const ConnectedApp = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapActionToProps)(App);