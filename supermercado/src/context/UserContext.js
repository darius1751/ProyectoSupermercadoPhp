import { createContext, useReducer } from "react";
import { userReducer,initialUser } from "../reducers/UserReducer";

const UserContext = createContext();
const UserProvider = ({children})=>{
    const [userState,dispatchUser] = useReducer(userReducer,initialUser);
    return (
        <UserContext.Provider value={{userState,dispatchUser}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContext;
export {UserProvider};