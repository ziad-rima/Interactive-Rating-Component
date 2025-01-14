import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Ratings from "./components/Ratings"
import SubmitButton from "./components/SubmitButton"
import SecondPage from "./components/SecondPage"
import { useState } from "react"
const App = () => {
  
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <>
      <main className="main-component">
        <Header />
        <Content />
        <Ratings selectedRating={selectedRating} setSelectedRating={setSelectedRating}/>
        <SubmitButton />
      </main>
      <div className="thankyou-component">
        {selectedRating && <SecondPage selectedRating={selectedRating}/>}
      </div>
      <Footer />
    </>
    
  )
}

export default App
