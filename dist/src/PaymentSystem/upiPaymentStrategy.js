"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upiPaymentStrategy = void 0;
class upiPaymentStrategy {
    performPayment(amount) {
        return `Rs. ${amount} payment peformed using UPI`;
    }
}
exports.upiPaymentStrategy = upiPaymentStrategy;
