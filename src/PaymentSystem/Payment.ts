import { IPaymentStrategy } from "./IPaymentStrategy";

export abstract class Payment{
    paymentStrategy:IPaymentStrategy;

    constructor(paymentStrategy: IPaymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }

    setStrategy(paymentStrategy: IPaymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }

    processPayment(amount : number):string {
        return this.paymentStrategy.performPayment(amount);
    }
}