import {TYPES} from '../actions/salesAction';
export const initialSales = {
    products:[

    ],
    cart:[
        
    ]
}
export const salesReducer = (state,action)=>{
    const {type} = action;  
    switch(type){
        case TYPES.GET_ALL_PRODUCTS:
            const {payload} = action;
            console.log(payload);
            return {...state,products:payload};
        case TYPES.ADD_TO_CART:
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
    console.log('Reducer sales');
    return state;   
}

