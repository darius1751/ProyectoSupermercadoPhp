import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router';
import { TYPES_USER } from '../actions/userAction';
import UserContext from '../context/UserContext';
import TOKEN from '../helpers/helpAuth';
import { helpHttp } from '../helpers/helpHttp';
const initialData = {
    user:'',
    password:''
}
const LoginForm = ()=>{
    const {dispatchUser} = useContext(UserContext);
    const [data, setData] = useState(initialData);
    const history = useHistory();
    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const http = helpHttp();
        http.post('http://localhost/PHP/universidad/supermercado/server/controllers/login.php',{headers:{'Content-Type': 'application/json',TOKEN},body:{...data}})
            .then(value=>{
                if(value.code === 200) {
                    delete value.code;
                    if(value.id){
                        dispatchUser({payload:value,type:TYPES_USER.LOGIN});
                        history.replace(`/profile/${data.user}`);
                    }
                };
                
            });
        
    };
    return (
        <div className='loginForm  content'>
            <h2>Iniciar Sesion</h2>
            <form onSubmit={handleSubmit} className='form  col-12'>
                <input type='text' placeholder='Usuario' name='user' value={data.user} onChange={handleChange} className='text' required/>
                <br/>
                <input type='password' placeholder='Contraseña' name='password' value={data.password} onChange={handleChange} className='text' required/>
                <br/>
                <input type='submit' value='Ingresar' className='submit'/>
            </form>
        </div>
        
    );    
}
export default LoginForm;