import React from 'react'
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';
import {connect, Dispatch} from 'react-redux';
import {App} from './app';
import {State} from '../store/state';
import {bindActionCreators} from 'redux';
import {getStripeCheckoutSession} from '../actionCreators/appActionCreators';
import Stripe = stripe.Stripe;

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapActionToProps>;

export interface OwnProps {

}

type AllProps = StateProps & DispatchProps & ReactStripeElements.InjectedStripeProps & OwnProps;

export function StripeCheckout(props: AllProps) {
    function startStripeCheckout() {
        const fullStripe = props.stripe as Stripe; // not sure why this cast is necessary, needs more investigation
        props.actions.getStripeCheckoutSession(sessionId => fullStripe.redirectToCheckout({sessionId} as any));
    }

    return <div>
        <button type={'button'} className='btn btn-default' onClick={startStripeCheckout}>Stripe checkout</button>
    </div>
}

function mapStateToProps(state: State) {
    return {

    };
}

function mapActionToProps(dispatch: Dispatch<State>) {
    return {
        actions: bindActionCreators({getStripeCheckoutSession}, dispatch)
    };
}

export const ConnectedStripeCheckout = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapActionToProps)(injectStripe(StripeCheckout));