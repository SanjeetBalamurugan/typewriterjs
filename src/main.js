"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const Typewriter_1 = __importDefault(require("../Typewriter"));
const typewriter = new Typewriter_1.default(document.querySelector(".whitespace"), { loop: true });
typewriter
    .type("Hi")
    .pauseFor(1000)
    .type("\n\It's Working!")
    .pauseFor(1000)
    .delete(2)
    .pauseFor(1000)
    .type("g!")
    .pauseFor(1000)
    .deleteAll(15)
    .start();
