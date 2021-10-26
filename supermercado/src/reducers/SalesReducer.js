import {TYPES} from '../actions/salesAction';
export const initialSales = {

}
export const salesReducer = (state,action)=>{
    const {type} = action;
    switch(type){
        case TYPES.ADD_TO_CART:
            console.log('xD');
            break;
        case TYPES.REMOVE_ALL_TO_CART:
            break;
        case TYPES.REMOVE_TO_CART:
            
            break;
        case TYPES.SALE:
            break;
        default:
            break;
    }
    console.log('Reducer sales')
    return state;   
}

