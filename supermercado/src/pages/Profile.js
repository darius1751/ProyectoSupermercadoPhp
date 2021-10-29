import { useContext } from "react";
import UserContext from "../context/UserContext";
import {NavLink,useParams} from 'react-router-dom';
import { TYPES_USER } from "../actions/userAction";
const Profile = ()=>{
    const {userState,dispatchUser} = useContext(UserContext);
    const {name,type,cash} = userState.user;
    const {userName} = useParams();
    const handleLogout = (e)=>{
        dispatchUser({type:TYPES_USER.LOGOUT});
    }
    return(
        <div>
            <h2>
                Bienvenido {name}
            </h2>
            <div>
                <h3>
                    Dinero Actual: ${cash}
                </h3>
                {/*Estas opciones estaran en una barra de navegacion*/}
                <NavLink to={`/sale`}>Comprar</NavLink><br/>
                <NavLink to={`/history/${userName}`}>Historial</NavLink>
            </div>
            {type === '2'?<NavLink to='/updateCantProducts'>Actualizar cantidad de productos</NavLink> :null}<br/>
            {type === '2'?<NavLink to='/register'>Registrar usuarios</NavLink>:null}<br/>
            {type === '2'?<NavLink to='/register'>Recargar saldo</NavLink>:null}
            <br/>
            <NavLink to='' onClick={handleLogout}>Cerrar Sesion</NavLink>
        </div>
    );
}
export default Profile;