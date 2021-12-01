import { useContext } from "react";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import { SalesContext } from "../context/SalesContext";
const Products = ()=>{
    const {sales} = useContext(SalesContext);
    return (
        <div>
            <NavBar fixed='fixed'/>
            <div className='content'>
            <div className='content-products'>
                {sales?.products?.map?.(value=>{
                    return <Product product={value} key={`product${value.id}`}/>      
                })}
            </div>
            </div>
            
            
        </div>
    )
}
export default Products;