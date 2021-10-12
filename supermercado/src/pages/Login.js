import React from 'react';
import LoginForm from '../components/LoginForm';
const Login = ({setUser})=>{
    return(
        <div>
            <LoginForm setUser={setUser}/>
        </div>
    );
}
export default Login;