import './style.css'
import Typewriter from "../Typewriter";

const typewriter = new Typewriter(document.querySelector(".whitespace")as HTMLDivElement, { loop: true })

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
  .start()
