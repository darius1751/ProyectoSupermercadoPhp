import { useContext } from "react";
import { SalesContext } from "../context/SalesContext";
import CartItem from "./CartItem";
const Cart = ()=>{
    const {cart} = useContext(SalesContext);
    return (
        <div>
            {
                cart.map(value=>{
                    return <CartItem item={value}/>;
                })
            }
        </div>
    );
}
export default Cart;