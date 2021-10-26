import { createContext, useReducer } from "react";
import { userReducer,initialUser } from "../reducers/UserReducer";
//import {initialSales,userReducer} from "../reducers/SalesReducer";

const UserContext = createContext();
const UserProvider = ({children})=>{
    const [user,dispatchUser] = useReducer(userReducer,initialUser);
    return (
        <UserContext.Provider value={{user,dispatchUser}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContext;
export {UserProvider};