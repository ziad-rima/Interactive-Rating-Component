import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Ratings from "./components/Ratings"
import SubmitButton from "./components/SubmitButton"
import SecondPage from "./components/SecondPage"
const App = () => {
  return (
    <>
      <main className="main-component">
        <Header />
        <Content />
        <Ratings />
        <SubmitButton />
      </main>
      <div className="thankyou-component">
        <SecondPage />
      </div>
      <Footer />
    </>
    
  )
}

export default App
