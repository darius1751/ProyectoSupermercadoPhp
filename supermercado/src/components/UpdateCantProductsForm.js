import { useState } from "react";
import SelectCategories from "./SelectCategories";
import SelectProducts from "./SelectProducts";
const initialProduct = {
    product:'0',
    product_item:0
};
const UpdateCantProductsForm = ()=>{
    const [product,setProduct] = useState(initialProduct);
    const handleChange = (e)=>{
        if(e.target.name==='product')
            setProduct({[e.target.name]:e.target.value,product_item:'0'});
        else
            setProduct({...product,[e.target.name]:e.target.value});
    }
    return (
        <div className='content'>
            <SelectCategories handleChange={handleChange}/>
            {product.product !== '0' && <SelectProducts handleChange={handleChange} category={product.product}/>}
        </div>
    );
}
export default UpdateCantProductsForm;