import React, { useEffect } from "react";
import Beer from "./Beer";
import { connect } from "react-redux";
import { getList } from "../actions/beerActions";

const BeerList = (props) => {
    useEffect(()=>{
        props.getList()
    },[])

    // props.beers.map(beer=>{console.log(beer.image_url)})

    return(
        <section>
            <h1>Beer List</h1>
            <div className='list'>
                {props.beers.map(beer =>
                    <Beer key={beer.id} beer={beer}/>
                )}
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    //bool?
    beers: state.beers
})

export default connect(mapStateToProps,{getList})(BeerList);