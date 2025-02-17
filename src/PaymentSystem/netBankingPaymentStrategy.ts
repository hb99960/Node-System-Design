import { IPaymentStrategy } from "./IPaymentStrategy";

export class netBankingPaymentStrategy implements IPaymentStrategy{
    performPayment(amount: number): string {
        return `Rs. ${amount} payment peformed using Net Banking`;
    }

}