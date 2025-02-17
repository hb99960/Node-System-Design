"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardPaymentStrategy_1 = require("./src/PaymentSystem/cardPaymentStrategy");
const PaymentProcessor_1 = require("./src/PaymentSystem/PaymentProcessor");
const upiPaymentStrategy_1 = require("./src/PaymentSystem/upiPaymentStrategy");
const processor = new PaymentProcessor_1.PaymentProcessor(new upiPaymentStrategy_1.upiPaymentStrategy);
console.log(processor.processPayment(10));
processor.setStrategy(new cardPaymentStrategy_1.cardPaymentStrategy);
console.log(processor.processPayment(10));
