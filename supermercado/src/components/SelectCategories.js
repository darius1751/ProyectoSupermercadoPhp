import React, { useContext } from 'react';
import { SalesContext } from '../context/SalesContext';
const SelectCategories = ({handleChange}) => {
    const {sales} = useContext(SalesContext);
    
    return (
        <div>
            <h2>Categoria:</h2>
            <select className='form-text  option' onChange={handleChange} name='product'>
            <option defaultChecked value='0' className='option'>Seleccione la categoria</option> 
            {
                sales.products.map(value=>{
                return <option className='option' key={value.id+'category'} value={value.id}>
                    {value.name}
                    </option>;
            })}
            </select>
        </div>
    );
}

export default SelectCategories;
