import { useState } from "react";
import NavBar from "./NavBar";
const initialData = {
    identification:null,
    valor:0,
    otroValor:0
};
const ReloadCashForm = ()=>{
    const [data,setData] = useState(initialData);
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <NavBar/>
                <article className='content'>
                <form onSubmit={handleSubmit}>
                    <h2>Recargar Saldo</h2>
                    <input type='number' className='form-text'min='0' max='9999999999' name='identification' id='identification' placeholder='Documento de Identificacion' onChange={handleChange} required/>
                    <br/>
                    
                    <div className='form-radio'>
                        <section className='float-l'>
                            <input type='radio' name='valor' value='20' id='20' onChange={handleChange} required/>
                            <label htmlFor='20'><strong>$20.000</strong></label>
                            <br/>
                            <input type='radio'name='valor' value='30' id='30' onChange={handleChange} required/>
                            <label htmlFor='30'><strong>$30.000</strong></label>
                        </section>
                        <input type='radio' name='valor' value='50' id='50' onChange={handleChange} required/>
                        <label htmlFor='50'><strong>$50.000</strong></label>
                        <br/>
                        <input type='radio' name='valor' value='-1' id='-1' onChange={handleChange} required/>
                        <label htmlFor='-1'><strong>Otro Valor</strong></label>
                        {data.valor === '-1'?<input className='form-text' type='number' min='10000' name='otroValor' placeholder='Valor' onChange={handleChange} required/>:null}
                    </div>
                    <input type='submit' value='Recargar' className='submit'/>
                </form>
            </article>
            
        </div>
    );
}
export default ReloadCashForm;