import { Ifly } from "./Ifly";

export class FlyWithNoWings implements Ifly{
    fly():string{
        return "I cannot fly";
    }
}