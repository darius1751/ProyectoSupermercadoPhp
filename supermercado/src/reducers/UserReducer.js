import { TYPES_USER } from "../actions/userAction";
export const initialUser = {
    user:{
        id:0,
        user:null,
        password:null,
        name:null,
        identification:null,
        type:0,
        cash:0
    }
}
export const userReducer = (state,action)=>{
    const {type,payload} = action;
    switch(type){
        case TYPES_USER.LOGIN:
            //Asi debes acerlo men, no te coloques a realizar peticiones Http en esta parte, que no da. mas facil
            //Le mando los datos y los agrego como el nuevo state, sin complicacion
            return {user:payload};
        case TYPES_USER.LOGOUT:
            return initialUser;
        default:
            break; 
    }
    return state;
}