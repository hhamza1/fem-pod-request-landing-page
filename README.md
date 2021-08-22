# Frontend Mentor - Pod Request Access Landing Page

This is a solution to the [Pod Request Access Landing Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
    - The Email address field is empty should show "Oops! Please add your email"
    - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

#### Mobile View
![Mobile View](./screenshots/mobile-view.png)

#### Tablet View
![Tablet View](./screenshots/tablet-view.png)

#### Desktop View
![Desktop View](./screenshots/desktop-view.png)

#### Desktop View - Active state
![Desktop View - Active state](./screenshots/desktop-active.png)

### Links

- Solution URL: [Github Repo](https://github.com/hhamza1/fem-pod-request-landing-page)
- Live Site URL: [Live Preview](https://hhamza1.github.io/fem-pod-request-landing-page/)

## My process

### What I learned

- Using Sass made things easier for many classes and different changes. It also allowed me to deconstruct the styling on different layers. It will still more structure and refactoring. 

- A bit of challenge was to move from mobile to tablet especially that the main HTML structure was mobile-oriented but I managed to deal with it.

- The email validity code I already used for previous project. Refactored to match some aspects of modern JS syntax (I am really proud of it that I reuse whenever possible😅😋)

```js
let email = document.querySelector("#email");
const errorMsg = document.querySelector("#error");
const form = document.querySelector("form");

let emailValidity = email.validity;

let emailValidation = (input, validator) => {
    if(!validator.valid || input.value === ""){
        errorMsg.classList.add("display-error");
    }
    else {
        errorMsg.classList.remove("display-error");
    }
}

form.addEventListener("submit", e =>{
    e.preventDefault();
    console.log(e.target.value);
    emailValidation(email, emailValidity);
})

```

### Useful resources

### Built with

- HTML
- CSS
- Sass
- Mobile-first workflow
- Flexbox
- Vanilla Javascript

## Author

- Website - [Hamza H.](https://roverhollow-yetqlu-3881733548360.stormkit.dev/)
- Frontend Mentor - [@hhamza1](https://www.frontendmentor.io/profile/hhamza1)
- Twitter - [@Hamza80780203](https://twitter.com/Hamza80780203)