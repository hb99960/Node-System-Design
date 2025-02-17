import { Ifly } from "./Ifly";
export abstract class Duck{
    public flyable: Ifly;

    constructor(flyable:Ifly){
        this.flyable = flyable;
    }

    swim():string{
        return "I can swim";
    }
    // abstract fly():string; // fixed : dynamic changes

    performFly():string{
        return this.flyable.fly();
    }

    setFlyBehaviour(flyable:Ifly){
        this.flyable = flyable;
    }
}