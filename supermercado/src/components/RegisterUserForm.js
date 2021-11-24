import React, { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import NavBar from './NavBar';
const initialUser = {
    identification:null,name:null,birthday:null,direction:null, phone:0
}
const Registeruserform = () => {
    const [data,setData] = useState(initialUser);
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const validate = ()=>{
        let errores = null;
        const {identification,name} = data;
        if(identification.length < 8 || identification.length > 10)
            errores = "La identificacion debe estar entre 8 y 10\n";
        if(name.trim().length < 10)
            errores+="Formato de nombre no valido";
        return errores;
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const errors = validate();
        if(!errors){
            helpHttp().post('',{headers:{'content-type':'application/json'}}).then(value=>{
                
            }).catch(err=>{

            });
        }else
            alert(errors);
        
    }
    return (
        <div>
           <NavBar/> 
           <article className='content'>
                <h2>Registrar Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <input type='number' placeholder='Documento de identificacion'className='form-text' name='identification' min='0' max='9999999999' onChange={handleChange} required/>
                    <br/>
                    <input type='text' placeholder='Nombre Completo' name='name' className='form-text' onChange={handleChange} required/>
                    <br/>
                    <label htmlFor='birthday'><strong>Fecha de nacimiento</strong></label>
                    <br/>
                    <input type='date' id='birthday' placeholder='Fecha de Nacimiento'className='form-text' name='birthday' onChange={handleChange} required/>
                    <br/>
                    <input type='text' placeholder='Direccion'name='direction' className='form-text' onChange={handleChange} required/>
                    <br/>
                    <input type='number' placeholder='Celular' min='0' name='phone' className='form-text' onChange={handleChange} required/>
                    <br/>
                    <input type='submit' value='Registrar' className='submit'/>
                </form>
       
           </article>
        </div>
    );
}

export default Registeruserform;
