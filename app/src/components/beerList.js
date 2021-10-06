import React from "react";
import Beer from "./Beer";
const BeerList = () => {

    return(
        <section>
            <h1>Beer List</h1>
            <div className='list'>
                {/*map beers to show <Beer/>*/}
                <Beer/>
                <Beer/>
                <Beer/>
                <Beer/>
                <Beer/>
                <Beer/>
                <Beer/>
                <Beer/>
                <Beer/>

            </div>
        </section>
    )
}

export default BeerList;