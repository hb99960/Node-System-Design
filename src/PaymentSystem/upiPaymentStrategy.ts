import { IPaymentStrategy } from "./IPaymentStrategy";

export class upiPaymentStrategy implements IPaymentStrategy{
    performPayment(amount: number): string {
        return `Rs. ${amount} payment peformed using UPI`;
    }

}