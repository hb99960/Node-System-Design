export interface IPaymentStrategy{
    performPayment(amount: number):string;
}