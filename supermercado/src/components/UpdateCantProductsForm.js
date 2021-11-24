import { useState } from "react";
import SelectCategories from "./SelectCategories";
import SelectProducts from "./SelectProducts";
const initialProduct = {
    product:'0',
    product_item:'0',
    cant:0
};
const UpdateCantProductsForm = ()=>{
    const [product,setProduct] = useState(initialProduct);
    const handleChange = (e)=>{
        if(e.target.name==='product')
            setProduct({[e.target.name]:e.target.value,product_item:'0'});
        else
            setProduct({...product,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{

    };
    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
            <SelectCategories handleChange={handleChange}/>
            {product.product !== '0' && <SelectProducts handleChange={handleChange} category={product.product}/>}
            {product.product_item !== '0' && <input className='form-text' type='number' name='cant' placeholder='Cantidad' required min='1' onChange={handleChange} value={product.cant}/>}
            {product.product_item !=='0' && <div><br/> <input className='submit' type='submit' value='Actualizar'/></div>}
            </form>
        </div>
    );
}
export default UpdateCantProductsForm;