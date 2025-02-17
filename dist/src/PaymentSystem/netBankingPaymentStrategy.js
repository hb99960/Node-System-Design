"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.netBankingPaymentStrategy = void 0;
class netBankingPaymentStrategy {
    performPayment(amount) {
        return `Rs. ${amount} payment peformed using Net Banking`;
    }
}
exports.netBankingPaymentStrategy = netBankingPaymentStrategy;
