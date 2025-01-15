const SubmitButton = ({onSubmit}) => {
  return (
    <div className="submit-button-container">
      <button onClick={onSubmit} className="submit-button" id="submit-button">SUBMIT</button>
    </div>
  )
}

export default SubmitButton
