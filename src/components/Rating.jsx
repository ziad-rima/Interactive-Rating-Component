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
