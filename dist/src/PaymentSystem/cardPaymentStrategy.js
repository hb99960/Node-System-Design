"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardPaymentStrategy = void 0;
class cardPaymentStrategy {
    performPayment(amount) {
        return `Rs. ${amount} payment peformed using Card`;
    }
}
exports.cardPaymentStrategy = cardPaymentStrategy;
