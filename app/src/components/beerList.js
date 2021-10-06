import React from "react";

const BeerList = () => {
    return(
        <section>
            <h1>Beer List</h1>
            <div className='list'>
                <div className='beerCard'>
                    <h2 className='beerName'>beer 1</h2>
                    <h4 className='tagline'>one more</h4>
                    <img className='beerimg'src='' alt='img of beer'/>
                    <p className='beerDescription'></p>
                    {/*food parings array */}
                </div>
                <div className='beerCard'>
                    <h2 className='beerName'>beer 2</h2>
                    <h4 className='tagline'>one more</h4>
                    <img className='beerimg'src='' alt='img of beer'/>
                    <p className='beerDescription'></p>
                    {/*food parings array */}
                </div>
                <div className='beerCard'>
                    <h2 className='beerName'>beer 3</h2>
                    <h4 className='tagline'>one more</h4>
                    <img className='beerimg'src='' alt='img of beer'/>
                    <p className='beerDescription'></p>
                    {/*food parings array */}
                </div>
            </div>
        </section>
    )
}

export default BeerList;