"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    setStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    processPayment(amount) {
        return this.paymentStrategy.performPayment(amount);
    }
}
exports.Payment = Payment;
