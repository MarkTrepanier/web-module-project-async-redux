import Axios from 'axios';

export const getList = () => {
    return ( dispatch => {
        dispatch({type: 'FETCH_START'})

        Axios.get('//https://api.punkapi.com/v2/beers')
            .then(res=>{console.log(res.data)})
    })
}