"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndianDuck = void 0;
const Duck_1 = require("./Duck");
const FlyWithWings_1 = require("./FlyWithWings");
class IndianDuck extends Duck_1.Duck {
    constructor() {
        super(new FlyWithWings_1.FlyWithWings);
    }
}
exports.IndianDuck = IndianDuck;
