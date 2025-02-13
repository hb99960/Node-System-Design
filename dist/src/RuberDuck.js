"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubberDuck = void 0;
const Duck_1 = require("./Duck");
const FlyWithNoWings_1 = require("./FlyWithNoWings");
class RubberDuck extends Duck_1.Duck {
    constructor() {
        super(new FlyWithNoWings_1.FlyWithNoWings);
    }
}
exports.RubberDuck = RubberDuck;
