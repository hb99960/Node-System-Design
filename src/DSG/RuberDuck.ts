
import { Duck } from "./Duck";
import { FlyWithNoWings } from "./FlyWithNoWings";

export class RubberDuck extends Duck {
    constructor(){
        super(new FlyWithNoWings);
    }
}