import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { TYPES_USER } from "../actions/userAction";
const NavBar = ()=>{
    const {userState,dispatchUser} = useContext(UserContext);
    const {user} = userState;
    const {type} = user;
    const handleLogout = (e)=>{
        dispatchUser({type:TYPES_USER.LOGOUT});
    }
    
    return (
        <nav className={`nav`}>
                <NavLink to={`/profile/${user.userName}`} className='nav-link' activeClassName='active'>
                    <section className='nav-item'>
                        Perfil
                    </section>
                </NavLink>
            
                <NavLink to={`/sale`} className='nav-link'>
                <section className='nav-item'>
                    Comprar
                    </section>
                    </NavLink>
                <NavLink to={`/history/${user.userName}`}  className='nav-link'>
                    <section className='nav-item'>
                        Historial
                    </section>
                </NavLink>
            
            {type === '2'?
                <NavLink to='/updateCantProducts' className='nav-link'>
                    <section className='nav-item'>
                        Actualizar cantidad
                        </section>
                        </NavLink>                   
            
             :null}
            {type === '2'?
                <NavLink to='/registerUsers' className='nav-link'>
                    <section className='nav-item'>
                        Registrar usuarios
                    </section>
                    </NavLink>
            
            :null}
            {type === '2'?
                <NavLink to='/reloadCash' className='nav-link'>
                    <section className='nav-item'>
                        Recargar saldo
                    </section>
                </NavLink>
            
            :null}
            
            <NavLink to='/login' onClick={handleLogout} className='nav-link '>
                <section className='nav-item'>Cerrar Sesion</section>
            </NavLink>
            
            
        </nav>
    );
}
export default NavBar;