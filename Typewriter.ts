import './src/style.css'
type QueueItem = () => Promise<void>

export default class Typewriter {
  #queue: QueueItem[] = []
  element: HTMLElement
  loop: boolean
  typingSpeed: number
  deletingSpeed: number

  constructor(parent:HTMLElement, { loop = false, typingSpeed= 50, deletingSpeed= 50 } = {} ) {
    this.element = document.createElement("div")
    this.element.classList.add("whitespace")
    parent.appendChild(this.element);
    this.loop = loop
    this.typingSpeed = typingSpeed
    this.deletingSpeed = deletingSpeed
  }

  type(string: string){
    this.#addToQueue(resolve => {
      let i = 0;
        const interval = setInterval(() => {
          this.element.append(string[i])
          i++
          if (i >= string.length) {
            clearInterval(interval)
            resolve()
          }
        }, this.typingSpeed)
    })
    return this;
  }

  delete(number: number){
    this.#addToQueue(resolve => {
      let i = 0;
        const interval = setInterval(() => {
          this.element.innerText = this.element.innerText.substring(0, this.element.innerText.length - 1)
          i++
          if (i >= number) {
            clearInterval(interval)
            resolve()
          }
        }, this.deletingSpeed)
    })
    return this;
  }

  deleteAll(deletingSpeed = this.deletingSpeed){
    console.log(deletingSpeed)
    return this;
  }

  pauseFor(duration: number){
    console.log(duration)
    return this;
  }

  async start() {
    for (let cb of this.#queue) {
        await cb()
    }
    return this;
  }

  #addToQueue(cb: (resolve: () => void) => void){
    this.#queue.push(() => new Promise(cb))
  }
}