import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";

export default function RatingList({ value, size, color }) {
    const [rating, setRating] = useState(["1", "2", "3", "4", "5"]);
    const starColor = color || "#FCBE00";

  
    
    return (
        <div className='flex justify-start item-center  gap-0.5'>
            {rating && rating.map((r, i) => {
                return (
                    <FaStar
                        key={i}
                        size={size || '16'}
                        color={value > i ? starColor : "#ccc"}
                        variant="Bold"
                    />
                );
            })}
        </div>
    );
}