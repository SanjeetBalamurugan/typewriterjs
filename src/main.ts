import './style.css'
import Typewriter from "../Typewriter";

const typewriter = new Typewriter(document.body, { loop: true })

typewriter
  .type("Hi")
  .pauseFor(1000)
  .type("\n\It's Working!")
  .delete(2)
  .type("g!")
  .deleteAll(15)
  .start()
