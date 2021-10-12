import React,{useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';
const initialData = {
    user:'',
    password:''
}
const LoginForm = ({setUser})=>{
    const [data, setData] = useState(initialData);
    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const http = helpHttp();
        http.post('http://localhost:80/PHP/universidad/supermercado/login.php',{headers:{'Content-Type':'application/json'},body:data})
        .then(value=>{
            console.log(value);
            if(value != null)
                setUser(value);
        })
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