import { useContext } from "react";
import UserContext from "../context/UserContext";
import NavBar from "../components/NavBar";
const Profile = ()=>{
    const {userState} = useContext(UserContext);
    const {name,cash} = userState.user;
    return(
        <div>
            <NavBar/>

            <div className='content'>
                <h2>
                    Bienvenido {name}
                </h2>
                <h3>
                    Dinero Actual: ${cash}
                </h3>
                {/*Estas opciones estaran en una barra de navegacion*/}
                
            </div>
        </div>
    );
}
export default Profile;