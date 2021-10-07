import React from "react";

const Beer = (props) => {
const {name,tagLine,img,description,pairings} = props;

    return(
        <div className='beerCard'>
        <h2 className='beerName'>{name}</h2>
        <h4 className='tagline'>{tagLine}</h4>
        <img className='beerimg'src={img} alt='img of beer'/>
        <p className='beerDescription'>{description}</p>        {/*food parings array */}
    </div>
    )
}

export default Beer;