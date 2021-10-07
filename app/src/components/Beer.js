import React from "react";
import Styled from 'styled-components';

const CardStyle = Styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    border: solid gold 2px;
    border-radius: 10px;
    text-align: left;
    div{
        width: 30%;
        height:50%;
        
        text-align: center;
        img{
            align-self: center;
            width:30%;
            height:30%;
        }
    }
    p{
        width:30%;
    }
`

const Beer = (props) => {
const {beer} = props;

    return(
        <CardStyle className='beerCard'>
            <h2 className='beerName'>{beer.name}</h2>
            <h4 className='tagline'>{beer.tagline}</h4>
            <div>
                <img className='beerimg'src={beer.image_url} alt='img of beer'/>
            </div>
            <p className='beerDescription'>{beer.description}</p>
            <ul className='pairings'>
                <h4>Food Pairings</h4>
                {beer.food_pairing && beer.food_pairing.map((item, index)=><li key={index}>{item}</li>)}
            </ul>
        </CardStyle>
    )
}

export default Beer;