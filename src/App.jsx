import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Ratings from "./components/Ratings"
import SubmitButton from "./components/SubmitButton"
import SecondPage from "./components/SecondPage"
import { useState } from "react"
const App = () => {
  
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitButton = () => {
    if (selectedRating) {
      setIsSubmitted(true)
    } else {
      alert("Please select a rating before submitting.")
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <main className="main-component">
          <Header />
          <Content />
          <Ratings selectedRating={selectedRating} setSelectedRating={setSelectedRating}/>
          <SubmitButton onSubmit={handleSubmitButton}/>
        </main>
      ) : (
        <div className="thankyou-component">
          <SecondPage selectedRating={selectedRating}/>
        </div>)
      } 
      <Footer />
    </>
    
  )
}

export default App
