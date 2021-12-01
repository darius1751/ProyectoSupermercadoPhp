const ProductItem =({item})=> {
    const handleClick = (e)=>{
        e.preventDefault();
        console.log(e.target.dataset.id);
    }
    return (
        <div className='product-item' >
            <img src={item.photo || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSs4YtlWL8RvplFo7RsfpiXOk-8c22BfY-1g&usqp=CAU`} alt='product' className='image-item' onClick={handleClick} data-id={item.id}/>
            <article className='description-item' key={`item-${Date.now()}`}>
                <strong><p>{item.productItemName}</p></strong>
                <strong><p>Marca: {item.name}</p></strong>
                <strong><p>Precio: ${item.price_unit}</p></strong>
                <strong><p>Disponibles:{item.cant}</p></strong>
            </article>
            
        </div>
    );
}
export default ProductItem;