# TypewriterJS

**A Typewriter Effect Library For Node JS**

## CDN

You can use the CDN version of this plugin for fast and easy setup.

<code type="html"></code>

## Installation

You can install Typewriterjs with just one command and you're good to go

# with npm

npm i typewriter-effect

# Example

## Basic example

<pre>const  typewriter  =  new  Typewriter(document.querySelector(".whitespace")as  HTMLDivElement, { loop: true })
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
.start()</pre>
