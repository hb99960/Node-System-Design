"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
class Duck {
    constructor(flyable) {
        this.flyable = flyable;
    }
    swim() {
        return "I can swim";
    }
    performFly() {
        return this.flyable.fly();
    }
    setFlyBehaviour(flyable) {
        this.flyable = flyable;
    }
}
exports.Duck = Duck;
