const initialState = {
    isFetching: false,
    beers:[
        {
            id:1,
            name:"Buzz",
            tagLine:"A Real Bitter Experience.",
            description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
            img:"https://images.punkapi.com/v2/keg.png",
            pairings: [
                "Spicy chicken tikka masala",
                "Grilled chicken quesadilla",
                "Caramel toffee cake"
            ],

        }
    ]
}

export const reducer = (state = initialState, action)=> {
    switch(action.type){
        // case 'FETCH_START':
        //     return{
        //         ...state,
        //         isFetching: true
        //     }
        // case 'FETCH_SUCCESS':
        //     return{
        //         ...state,
        //         beers: action.payload
        //     }
        default:
            return state
    }
}
