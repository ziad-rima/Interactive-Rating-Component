import Rating from "./Rating"
import { useState } from "react"
const Ratings = () => {
    const [selectedRating, setSelectedRating] = useState(null);
    
    const handleRatingClick = (rating) => {
        setSelectedRating(rating)
    }

  return (
    <div className="ratings-component">
        {[1,2,3,4,5].map((rating) => (
            <Rating 
                key={rating} 
                isSelected={selectedRating === rating}
                onClick= {() => handleRatingClick(rating)}
            >
                <p className="rating">{rating}</p>       
            </Rating>
        ))}
    </div>
  );
};

export default Ratings