"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Typewriter {
  #queue = [];
  #element;
  #loop;
  #typingSpeed;
  #deletingSpeed;
  constructor(parent, { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}) {
    this.#element = document.createElement("div");
    this.#element.classList.add("whitespace");
    this.#element.classList.add("blinkline");
    parent.appendChild(this.#element);
    this.#loop = loop;
    this.#typingSpeed = typingSpeed;
    this.#deletingSpeed = deletingSpeed;
  }
  type(string) {
    this.#addToQueue(resolve => {
      let i = 0;
      const interval = setInterval(() => {
        this.#element.append(string[i]);
        i++;
        if (i >= string.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.#typingSpeed);
    });
    return this;
  }
  delete(number) {
    this.#addToQueue(resolve => {
      let i = 0;
      const interval = setInterval(() => {
        this.#element.innerText = this.#element.innerText.substring(0, this.#element.innerText.length - 1);
        i++;
        if (i >= number) {
          clearInterval(interval);
          resolve();
        }
      }, this.#deletingSpeed);
    });
    return this;
  }
  deleteAll(deleteSpeed = this.#deletingSpeed) {
    this.#addToQueue(resolve => {
      const interval = setInterval(() => {
        this.#element.innerText = this.#element.innerText.substring(0, this.#element.innerText.length - 1);
        if (this.#element.innerText.length === 0) {
          clearInterval(interval);
          resolve();
        }
      }, deleteSpeed);
    });
    return this;
  }
  pauseFor(duration) {
    this.#addToQueue(resolve => {
      setTimeout(resolve, duration);
    });
    return this;
  }
  async start() {
    let cb = this.#queue.shift();
    while (cb != null) {
      await cb();
      if (this.#loop)
        this.#queue.push(cb);
      cb = this.#queue.shift();
    }
    return this;
  }
  #addToQueue(cb) {
    this.#queue.push(() => new Promise(cb));
  }
}
exports.default = Typewriter;
