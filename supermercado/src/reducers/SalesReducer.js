import {TYPES_SALES} from '../actions/salesAction';

export const initialSales = {
    products:[
        
    ],
    cart:[
        
    ]
}
export const salesReducer = (state,action)=>{
    const {type} = action;  
    switch(type){
        case TYPES_SALES.GET_ALL_PRODUCTS:
            const {payload} = action;
            return {...state,products:payload};
        case TYPES_SALES.ADD_TO_CART:
            return {...state,cart:[...state.cart,payload]};
        case TYPES_SALES.REMOVE_ALL_TO_CART:
            break;
        case TYPES_SALES.REMOVE_TO_CART:
            
            break;
        case TYPES_SALES.SALE:
            break;
        default:
            break;
    }
    console.log('Reducer sales');
    return state;   
}

