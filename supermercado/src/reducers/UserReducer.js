import { TYPES_USER } from "../actions/userAction";
import { helpHttp } from '../helpers/helpHttp';
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
            const http = helpHttp();
            http.post('http://localhost:80/PHP/universidad/supermercado/server/controllers/login.php',{headers:{'Content-Type':'application/json'},body:payload})
            .then(value=>{
                console.log(value);
            });
        break;
        default:
            break; 
    }
    return state;
}