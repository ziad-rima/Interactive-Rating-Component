import Selection from "./Selection"
import Appreciation from "./Appreciation"
const SecondPage = ({selectedRating}) => {
  return (
    <div className="second-page">
      <Selection selectedRating={selectedRating}/>
      <Appreciation />
    </div>
  )
}

export default SecondPage
