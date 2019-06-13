import {State} from '../store/state';
import {Dispatch} from 'redux';
import {getFormValues} from 'redux-form';

import {formName as appFormName, FormData as AppFormData} from '../components/appForm';
import {stripeService} from '../services/stripeService';

export const submitAppForm = (stripeTokenId: string) => async (dispatch: Dispatch<State>, getState: () => State) => {
    if (stripeTokenId == null) {
        console.log("no stripe token received");
        return;
    }
    const currentState = getState();
    const appFormValues = getFormValues(appFormName)(currentState) as AppFormData;

    const chargeAmount = parseFloat(appFormValues.chargeAmount);
    if (Number.isNaN(chargeAmount) || !Number.isFinite(chargeAmount) || chargeAmount < 0) {
        console.log("charge amount is invalid");
        return;
    }

    const res = await stripeService.submitCharge({
        chargeAmount,
        stripeTokenId
    });

    console.log(res);
};

export const getStripeCheckoutSession = (callback: (sessionId: string) => void) => async (dispatch: Dispatch<State>, getState: () => State) => {
    const res = await stripeService.startStripeCheckoutSession();
    callback(res.id);
};