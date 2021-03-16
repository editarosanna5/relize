import * as ActionTypes from './ActionTypes';

export const Promos = (state = {
        errMess: null,
        promos: []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading:false, errMess:null, promos: action.payload};

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading:false,errMess:action.payload,promos:[]};

        // case ActionTypes.ADD_PROMOS:
        //     var promo = action.payload;
        //     return {...state, promos: state.promos.concat(promo)};
        default:
            return state;
    }
}