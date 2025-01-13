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
- Actually, I don't have to create a component for `main` I can just do:
```jsx
import Header from "./components/Header"
import Footer from "./components/Footer"
const App = () => {
  return (
    <>
      <main className="main-component">
        <Header />
      </main>
      <Footer />
    </>
    
  )
}
export default App
```
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

After creating the `Ratings.jsx` and `Rating.jsx` components, which were coded like this:

`Ratings.jsx`:
```jsx
import Rating from "./Rating"
const Ratings = () => {
  return (
    <div className="ratings-component">
        <Rating>
            <p className="rating">1</p>
        </Rating>
        <Rating>
            <p className="rating">2</p>
        </Rating>
        <Rating>
            <p className="rating">3</p>
        </Rating>
        <Rating>
            <p className="rating">4</p>
        </Rating>
        <Rating>
            <p className="rating">5</p>
        </Rating>
    </div>
  )
}
export default Ratings
```
`Rating.jsx`:
```jsx
const Rating = ({children}) => {
  return (
    <div className="rating-item">
      {children}
    </div>
  )
}
export default Rating
```
I realized that the user should click one of the ratings, and after doing so, the background color of that particular rating should be set to `var(--Orange)`, so I decided to change the code for those two components using the `useState()` hook.

- In `Ratings.jsx`, I declared a state variable `selectedRating` and its corresponding state updater function `setSelectedRating` using React's `useState` hook. Initially, the `selectedRating` state is set to `null`:
```jsx
const [selectedRating, setSelectedRating] = useState(null);    
const handleRatingClick = (rating) => {
    setSelectedRating(rating)
};
```
- Then I used `map()` function to map over the elements of an array consisting of numbers from '1' to '5', then I passed each number as a `rating` variable to `Rating.jsx` component, along with `key`, `isSelected` and `onClick` function as props, where `isSelected` acts as a boolean to check whether or not a certain "rating" (or number) has been selected and the `onClick` function that calls `handleRatingClick` function to set the `selectedRating` to `rating`:
```jsx
{[1,2,3,4,5].map((rating) => (
    <Rating 
        key={rating} 
        isSelected={selectedRating === rating}
        onClick= {() => handleRatingClick(rating)}
    >
        <p className="rating">{rating}</p> 
    </Rating>
))}
``` 
- After that, I modified the `Rating.jsx` component to accept the props passed and use them according to the intended logical process:
```jsx
const Rating = ({children, isSelected, onClick}) => {
  return (
    <div className={`rating-item ${isSelected ? "selected" : ""}`}
         onClick={onClick}
    >
      {children}
    </div>
  )
}
export default Rating
```
I used a ternary operation to set the second class name for the rating item (which is the number in this case), based on whether or not that particular number has been selected. By using `isSelected` boolean, the `className` can be either `rating-item selected` if the number has been selected or just `rating-item` if the number has not been selected, I modified the `index.css` accordingly:
```css
.ratings-component .rating-item.selected {
    background-color: var(--Orange);
    color: var(--Very-Dark-Blue);
}
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
