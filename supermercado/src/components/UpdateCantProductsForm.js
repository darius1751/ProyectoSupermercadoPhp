import { useContext, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import SelectCategories from "./SelectCategories";
import SelectMark from "./SelectMark";
import TOKEN from '../helpers/helpAuth';
import { SalesContext } from "../context/SalesContext";
import { TYPES_SALES } from "../actions/salesAction";

const initialProduct = {
    product:'0',
    product_item:'0',
    cant:0
};
const UpdateCantProductsForm = ()=>{
    const [product,setProduct] = useState(initialProduct);
    const {dispatch} = useContext(SalesContext);
    const handleChange = (e)=>{
        if(e.target.name==='product')
            setProduct({[e.target.name]:e.target.value,product_item:'0'});
        else
            setProduct({...product,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        helpHttp().put('http://localhost/PHP/Universidad/supermercado/server/controllers/product/updateCant.php',{headers:{'Content-type':'application/json',TOKEN},body:{id:product.product_item,cant:product.cant}})
        .then(value=>{
            if(value.code === 200){
                alert('Se a actualizado correctamente la cantidad del producto');
                helpHttp().get('http://localhost/PHP/Universidad/supermercado/server/controllers/product/',{headers:{TOKEN,'content-type':'application/json'}}).then(value=>{
                dispatch({type:TYPES_SALES.GET_ALL_PRODUCTS,payload:value});
                setProduct({...product,cant:""});
            });
            }else{  
                alert('Se a generado un error');
            }
                
            
        });
    };
    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
            <SelectCategories handleChange={handleChange}/>
            {product.product !== '0' && <SelectMark handleChange={handleChange} category={product.product}/>}
            {product.product_item !== '0' && <input className='form-text' type='number' name='cant' placeholder='Cantidad' value={product.cant} required min='1' onChange={handleChange}/>}
            {product.product_item !=='0' && <div><br/> <input className='submit' type='submit' value='Actualizar'/></div>}
            </form>
        </div>
    );
}
export default UpdateCantProductsForm;