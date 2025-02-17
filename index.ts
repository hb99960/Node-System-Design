import { AmericanDuck } from "./src/DSG/AmericanDuck";
import { FlyWithNoWings } from "./src/DSG/FlyWithNoWings";
import { IndianDuck } from "./src/DSG/IndianDuck";
import { RubberDuck } from "./src/DSG/RuberDuck";
import { cardPaymentStrategy } from "./src/PaymentSystem/cardPaymentStrategy";
import { Payment } from "./src/PaymentSystem/Payment";
import { PaymentProcessor } from "./src/PaymentSystem/PaymentProcessor";
import { upiPaymentStrategy } from "./src/PaymentSystem/upiPaymentStrategy";

// client code
// const indianDuck = new IndianDuck();
// console.log(indianDuck.swim());
// console.log(indianDuck.performFly());
// indianDuck.setFlyBehaviour(new FlyWithNoWings);
// console.log(indianDuck.performFly());

// const americanDuck = new AmericanDuck(new FlyWithNoWings);
// console.log(americanDuck.performFly());

// const ruberDuck = new RubberDuck();
// console.log(ruberDuck.performFly());


// client code for Payment
const processor = new PaymentProcessor(new upiPaymentStrategy);
console.log(processor.processPayment(10));
processor.setStrategy(new cardPaymentStrategy);
console.log(processor.processPayment(10));



