import { useContext } from "react";
import { SalesContext } from "../context/SalesContext";

const SelectProducts = ({handleChange,category})=>{
    const {sales} = useContext(SalesContext);
    let data  = sales.products.filter((data)=> data.id === category);
    return (
        <div>
            <h2>Marca</h2>
            <select className='form-text  option' onChange={handleChange} name='product_item'>
                <option className='option' value='0'>Seleccione el producto</option>
                {
                    data[0]?.products_items?.map(value=>{
                        return <option className='option' key={value.id} value={value.id}>{value.name}</option>
                    })
                }     
            </select>
            <br/>
            
        </div>
    );
}
export default SelectProducts;