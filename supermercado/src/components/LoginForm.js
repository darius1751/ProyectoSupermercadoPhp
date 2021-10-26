import React,{useState,useContext} from 'react';
import { TYPES_USER } from '../actions/userAction';
import UserContext from '../context/UserContext';
const initialData = {
    user:'',
    password:''
}
const LoginForm = ()=>{
    const {dispatchUser} = useContext(UserContext);
    const [data, setData] = useState(initialData);
    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatchUser({payload:data,type:TYPES_USER.LOGIN});
    };
    return (
        <div className='loginForm'>
            <h2>Iniciar Session</h2>
            <form onSubmit={handleSubmit} className='form  col-12'>
                <input type='text' placeholder='Ingrese su usuario:' name='user' value={data.user} onChange={handleChange} className='text'/>
                <br/>
                <input type='password' placeholder='Ingrese su contraseña:' name='password' value={data.password} onChange={handleChange} className='text'/>
                <br/>
                <input type='submit' value='Iniciar session' className='submit'/>
            </form>
        </div>
        
    );    
}
export default LoginForm;