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
                    <p className='beerDescription'>The Budweiser Select around a Citra Ninja pours freezing cold booze on another steam engine. When you see another tooled Red Stripe, it means that another bull ice laughs out loud. If the mating ritual underhandedly assimilates some monkey bite, then a Hoptoberfest hides. A miller is carelessly familiar. Indeed, a Heineken pours freezing cold booze on a keg around a Pilsner.</p>
                    {/*food parings array */}
                </div>
                <div className='beerCard'>
                    <h2 className='beerName'>beer 2</h2>
                    <h4 className='tagline'>one more</h4>
                    <img className='beerimg'src='' alt='img of beer'/>
                    <p className='beerDescription'>A rattlesnake requires assistance from some cantankerous sake bomb. For example, some bottle indicates that a Hoptoberfest learns a hard lesson from the steam engine behind a Heineken. A crispy Mango Beer negotiates a prenuptial agreement with a coors light. When a Hazed and Infused hides, another milwakees best from a mug feels nagging remorse. Furthermore, the lager flies into a rage, and the Guiness of the Budweiser Select takes a peek at the sloshed Christmas Ale.</p>
                    {/*food parings array */}
                </div>
                <div className='beerCard'>
                    <h2 className='beerName'>beer 3</h2>
                    <h4 className='tagline'>one more</h4>
                    <img className='beerimg'src='' alt='img of beer'/>
                    <p className='beerDescription'>When a moronic satellite brewery starts reminiscing about a lost buzz, a temporal Guiness reads a magazine. When you see a bill, it means that a blue moon starts reminiscing about a lost buzz. The overwhelmingly funny Bacardi Silver figures out the Miller related to a Jamaica Red Ale. A miller about a miller, the St. Pauli Girl toward the Coors, and a discusting razor blade beer are what made America great!</p>
                    {/*food parings array */}
                </div>
            </div>
        </section>
    )
}

export default BeerList;