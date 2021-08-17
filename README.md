# Frontend Mentor - Order Summary Component

This is a solution to the [order summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj)

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

### Screenshot

#### Mobile View
![Mobile View](./screenshots/mobile-view.png)

#### Desktop View
![Desktop View](./screenshots/desktop-view.png)

#### Desktop View - Active state
![Desktop View - Active state](./screenshots/active-state.gif)

### Links

- Solution URL: [Github Repo](https://github.com/hhamza1/fem-order-summary-cpt)
- Live Site URL: [Live Preview](https://hhamza1.github.io/fem-order-summary-cpt/)

## My process

### What I learned
I wanted to add a stylish animated underline on the button "Change", and I used the following CSS code from Danny Guo's blog, it's in the useful resources section

```css
.btn-change {
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 1px;
    color: var(--primary-bright-blue);
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    transition: background-size .3s;
    
}

.btn-change:hover {
    background-image: linear-gradient(currentColor, currentColor);
    color: hsla(245, 83%, 68%, 1);
    background-size: 0% 1px;
}
```

This was also another fancy animation for the button "Proceed the Payment", I have already used it before in previous project. I really like the result of the animation. 

```css
.btn-proceed {
    background-color: var(--primary-bright-blue);
    box-shadow: 0px 20px 20px hsla(245, 75%, 52%, .19);
    color: #fff;
    margin-top: 24px;
    position: relative;
    top: 0;
    transition: all .2s ease-in-out;
}

.btn-proceed:hover {
    background-color: hsla(245, 83%, 68%, 1);
}

.btn-proceed:active {
    box-shadow: none;
    top: 5px;
}
```

### Useful resources

- [Danny Guo's blog](https://www.dannyguo.com/blog/animated-multiline-link-underlines-with-css/) - This helped me with the stylish animated underline, I simply reduced the size and reversed the animation. I will be using more in future projects
### Built with

- HTML
- CSS
- Mobile-first workflow
- Flexbox

## Author

- Website - [Hamza H.](https://roverhollow-yetqlu-3881733548360.stormkit.dev/)
- Frontend Mentor - [@hhamza1](https://www.frontendmentor.io/profile/hhamza1)
- Twitter - [@Hamza80780203](https://twitter.com/Hamza80780203)