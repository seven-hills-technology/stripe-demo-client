import React from 'react'
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';


export interface FormData {
    chargeAmount: string;
}

export interface OwnProps {
    onSubmit: (stripeTokenId: string) => void;
}

type AllProps = ReactStripeElements.InjectedStripeProps & OwnProps & InjectedFormProps<FormData, OwnProps>;

export const formName = 'appForm';

export function AppForm(props: AllProps) {
    async function gatherStripeTokenAndSubmit() {
        const {token} = await props.stripe.createToken();
        props.onSubmit(token != null ? token.id : null);
    }

    return <form onSubmit={gatherStripeTokenAndSubmit} noValidate>
        <table>
            <tbody>
                <tr>
                    <th>Charge amount</th>
                    <td>
                        <Field name="chargeAmount" component="input" className="form-control" type="number" />
                    </td>
                </tr>
                <tr>
                    <td>Card number</td>
                    <td style={{width: "500px"}}>
                        <CardElement className='form-control' />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button type={'button'} className='btn btn-primary' onClick={gatherStripeTokenAndSubmit}>Submit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
}

export const ConnectedAppForm = reduxForm<{}, OwnProps>({ form: formName, enableReinitialize: true })(injectStripe(AppForm));