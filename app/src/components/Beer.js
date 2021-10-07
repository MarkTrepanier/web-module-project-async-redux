import React from "react";

const Beer = (props) => {
const {beer} = props;

    return(
        <div className='beerCard'>
        <h2 className='beerName'>{beer.name}</h2>
        <h4 className='tagline'>{beer.tagLine}</h4>
        <img className='beerimg'src={beer.image_url} alt='img of beer'/>
        <p className='beerDescription'>{beer.description}</p>        {/*food parings array */}
    </div>
    )
}

export default Beer;