"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Typewriter_instances, _Typewriter_queue, _Typewriter_element, _Typewriter_loop, _Typewriter_typingSpeed, _Typewriter_deletingSpeed, _Typewriter_addToQueue;
Object.defineProperty(exports, "__esModule", { value: true });
require("./src/style.css");
class Typewriter {
    constructor(parent, { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}) {
        _Typewriter_instances.add(this);
        _Typewriter_queue.set(this, []);
        _Typewriter_element.set(this, void 0);
        _Typewriter_loop.set(this, void 0);
        _Typewriter_typingSpeed.set(this, void 0);
        _Typewriter_deletingSpeed.set(this, void 0);
        __classPrivateFieldSet(this, _Typewriter_element, document.createElement("div"), "f");
        __classPrivateFieldGet(this, _Typewriter_element, "f").classList.add("whitespace");
        __classPrivateFieldGet(this, _Typewriter_element, "f").classList.add("blinkline");
        parent.appendChild(__classPrivateFieldGet(this, _Typewriter_element, "f"));
        __classPrivateFieldSet(this, _Typewriter_loop, loop, "f");
        __classPrivateFieldSet(this, _Typewriter_typingSpeed, typingSpeed, "f");
        __classPrivateFieldSet(this, _Typewriter_deletingSpeed, deletingSpeed, "f");
    }
    type(string) {
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, resolve => {
            let i = 0;
            const interval = setInterval(() => {
                __classPrivateFieldGet(this, _Typewriter_element, "f").append(string[i]);
                i++;
                if (i >= string.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, __classPrivateFieldGet(this, _Typewriter_typingSpeed, "f"));
        });
        return this;
    }
    delete(number) {
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, resolve => {
            let i = 0;
            const interval = setInterval(() => {
                __classPrivateFieldGet(this, _Typewriter_element, "f").innerText = __classPrivateFieldGet(this, _Typewriter_element, "f").innerText.substring(0, __classPrivateFieldGet(this, _Typewriter_element, "f").innerText.length - 1);
                i++;
                if (i >= number) {
                    clearInterval(interval);
                    resolve();
                }
            }, __classPrivateFieldGet(this, _Typewriter_deletingSpeed, "f"));
        });
        return this;
    }
    deleteAll(deleteSpeed = __classPrivateFieldGet(this, _Typewriter_deletingSpeed, "f")) {
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, resolve => {
            const interval = setInterval(() => {
                __classPrivateFieldGet(this, _Typewriter_element, "f").innerText = __classPrivateFieldGet(this, _Typewriter_element, "f").innerText.substring(0, __classPrivateFieldGet(this, _Typewriter_element, "f").innerText.length - 1);
                if (__classPrivateFieldGet(this, _Typewriter_element, "f").innerText.length === 0) {
                    clearInterval(interval);
                    resolve();
                }
            }, deleteSpeed);
        });
        return this;
    }
    pauseFor(duration) {
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, resolve => {
            setTimeout(resolve, duration);
        });
        return this;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let cb = __classPrivateFieldGet(this, _Typewriter_queue, "f").shift();
            while (cb != null) {
                yield cb();
                if (__classPrivateFieldGet(this, _Typewriter_loop, "f"))
                    __classPrivateFieldGet(this, _Typewriter_queue, "f").push(cb);
                cb = __classPrivateFieldGet(this, _Typewriter_queue, "f").shift();
            }
            return this;
        });
    }
}
exports.default = Typewriter;
_Typewriter_queue = new WeakMap(), _Typewriter_element = new WeakMap(), _Typewriter_loop = new WeakMap(), _Typewriter_typingSpeed = new WeakMap(), _Typewriter_deletingSpeed = new WeakMap(), _Typewriter_instances = new WeakSet(), _Typewriter_addToQueue = function _Typewriter_addToQueue(cb) {
    __classPrivateFieldGet(this, _Typewriter_queue, "f").push(() => new Promise(cb));
};
