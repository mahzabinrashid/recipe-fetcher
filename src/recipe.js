import React from 'react';

const Recipe = ({title, image, ingredients}) => {
    return ( 
        <div className='recipe'>
            <img src={image} alt=""/>
            <h2><b><i class="fas fa-cookie-bite"></i>  {title}  <i class="fas fa-cookie-bite"></i></b></h2> 
            <ul>
            <p><b>Ingredients:</b></p>
                { ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
               

            </ul>
            
            
        </div>
    );
}

export default Recipe;