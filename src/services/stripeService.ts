import { axios } from "./axiosService";
import {ChargeInfo} from '../models/chargeInfo';

class StripeService {
    async submitCharge(chargeInfo: ChargeInfo): Promise<any> {
        const res = await axios.post<any>(`/stripe/charge`, chargeInfo);
        return res.data;
    }

    async startStripeCheckoutSession(): Promise<any> {
        const res = await axios.post<any>(`/stripe/checkout-session`);
        return res.data;
    }
}

export const stripeService = new StripeService();