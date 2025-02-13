import { AmericanDuck } from "./src/AmericanDuck";
import { FlyWithNoWings } from "./src/FlyWithNoWings";
import { IndianDuck } from "./src/IndianDuck";
import { RubberDuck } from "./src/RuberDuck";


// client code
const indianDuck = new IndianDuck();
console.log(indianDuck.swim());
console.log(indianDuck.performFly());
indianDuck.setFlyBehaviour(new FlyWithNoWings);
console.log(indianDuck.performFly());

const americanDuck = new AmericanDuck(new FlyWithNoWings);
console.log(americanDuck.performFly());

const ruberDuck = new RubberDuck();
// console.log(ruberDuck.performFly());



