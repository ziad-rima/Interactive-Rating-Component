# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links


## My process

For this project, I've chosen to go with React, I set up the necessary environment and installed the required dependencies, then I created a folder named components where I'd be putting all of my individual components.

in `App.jsx`:
```jsx
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="main-component">
      <Header />
      <Footer />
    </main>
  )
}
export default App
```
- I'm thinking of creating a separate component for `main` as that would give me the opportunity to divide the footer and the main content.

This is how I coded the `Header.jsx` component:
```jsx
import star from '../assets/images/icon-star.svg'
const Header = () => {
  return (
    <header className='header'>
      <img className='header-image' src={star} alt="Star Icon" />
      <h1 className='header-title'>How did we do?</h1>
    </header>
  )
}
export default Header
```
### Built with

- HTML (using JSX)
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

### Continued development


### Useful resources

- [React](https://react.dev/)

## Author

- GitHub - [ziad-rima](https://github.com/ziad-rima)
- Frontend Mentor - [@ziad-rima](https://www.frontendmentor.io/profile/ziad-rima)
- X - [@rima4082](https://x.com/rima4082)
