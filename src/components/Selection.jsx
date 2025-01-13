import thankYou from '../assets/images/illustration-thank-you.svg'

const Selection = () => {
  return (
    <div className="selection-content">
      <img className="selection-image" src={thankYou} alt="Thank you image." />
      <p className="selection-text">You selected out of 5</p>
    </div>
  )
}

export default Selection
