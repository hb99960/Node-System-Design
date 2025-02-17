import { IPaymentStrategy } from "./IPaymentStrategy";

export class cardPaymentStrategy implements IPaymentStrategy{
    performPayment(amount: number): string {
        return `Rs. ${amount} payment peformed using Card`;
    }

}