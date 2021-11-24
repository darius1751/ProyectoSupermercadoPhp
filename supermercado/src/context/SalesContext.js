import { createContext, useEffect, useReducer } from "react";
import { helpHttp } from "../helpers/helpHttp";
import TOKEN from '../helpers/helpAuth';
import { initialSales, salesReducer } from "../reducers/SalesReducer";
import {TYPES} from '../actions/salesAction';
export const salesContext = createContext();

export const SalesProvider = ({children})=>{
    const [sales, dispatch] = useReducer(salesReducer,initialSales);
    useEffect(()=>{
        helpHttp().get('http://localhost/PHP/Universidad/supermercado/server/controllers/product/',{headers:{TOKEN,'content-type':'application/json'}}).then(value=>{
            dispatch({type:TYPES.GET_ALL_PRODUCTS,payload:value});
        });
    },[]);
    
    return (
        <salesContext.Provider value={{sales,dispatch}}>
            {children}
        </salesContext.Provider>
    );
}
    