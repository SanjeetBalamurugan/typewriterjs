# TypewriterJS

**A Typewriter Effect Library For Node JS**

## CDN

You can use the CDN version of this plugin for fast and easy setup.

<pre>https://unpkg.com/@hyperspherestudios/typewriterjs@latest/Typewriter.js</pre>

## Installation

You can install Typewriterjs with just one command and you're good to go but using cdn is best because there are some bugs

## with npm

<pre>npm i @hyperspherestudios/typewriterjs@0.0.2</pre>

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
