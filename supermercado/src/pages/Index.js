import { NavLink } from "react-router-dom";

const Index = ()=>{
    return (
        <div>
            <h2>Bienvenido al supermercado digital</h2>
            <NavLink to='/login'>
                Login
            </NavLink>
        </div>
    );
}
export default Index;