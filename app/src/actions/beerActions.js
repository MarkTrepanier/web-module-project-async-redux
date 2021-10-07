import Axios from 'axios';

export const getList = () => {
    return ( dispatch => {
        dispatch({type: 'FETCH_START'})

        Axios.get('https://api.punkapi.com/v2/beers')
            .then(res=>{
                dispatch(fetchSuccess(res.data))
            })
            .catch(er=>{console.error(er)})
    })
}

export const fetchSuccess = (beers)=> {
    return ({type:'FETCH_SUCCESS', payload:beers});
}

// export const 'fetchFail' = (error)=> {
//     return ({type:'FETCH_FAIL', payload:error});
// }