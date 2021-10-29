import { createContext, useReducer } from "react";
import { initialSales, salesReducer } from "../reducers/SalesReducer";
export const salesContext = createContext();

export const SalesProvider = ({children})=>{
    const [sales, dispatch] = useReducer(salesReducer,initialSales);
    return (
        <salesContext.Provider value={{sales,dispatch}}>
            {children}
        </salesContext.Provider>
    );
}
