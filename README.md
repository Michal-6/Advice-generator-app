# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- SCSS
- JS

### What I learned

I learned how to use 3rd party web APIs.

```js
function generate(){
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        document.getElementById('quote').innerHTML = Adviceobj.advice;
        document.getElementById('title').innerHTML = "ADVICE #" + Adviceobj.id; 
    }).catch(error => {
        console.log(error);
    });
}
```