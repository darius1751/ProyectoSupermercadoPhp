import ProductItem from "./ProductItem";

const Product = ({product}) => {
    console.log(product);
    return (
        <div>
            <br/>
            <br/>
            <h2>{product.name}</h2>
            <img src={product.photo || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSs4YtlWL8RvplFo7RsfpiXOk-8c22BfY-1g&usqp=CAU`} alt='category' className='image' />
            <div className='content-items'>
                {product?.products_items?.map(v=>{
                    return <ProductItem key={`producto${product.id+product.name}${Date.now()+Math.random()}`} item={v}/>;
                })}
            </div>
            
        </div>
    );
}

export default Product;