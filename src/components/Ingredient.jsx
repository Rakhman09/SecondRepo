import React from 'react';

const Ingredient = ({ imageSrc,  onClick }) => {
    return(
        <div
            onClick={onClick}
            className={`w-[150px] h-[100px] object-cover flex items-center justify-center
                cursor-pointer m-[10px]`} 
            
                
            >
            <img src={imageSrc} alt="ingredient" className='w-[120px] h-[80px] rounded-2xl' />
        </div>
    )
}

export default Ingredient;