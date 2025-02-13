
import { Duck } from "./Duck";
import { FlyWithWings } from "./FlyWithWings";

export class IndianDuck extends Duck {
    constructor(){
        super(new FlyWithWings);
    }
}