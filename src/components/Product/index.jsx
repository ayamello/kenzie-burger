function Product({ id, name, category, price, handleClick }) {
    return (
        <div className="divProduct">
             <div className="Infos">
                <p>{name}</p>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
            </div>

            <div className="BtnAddCart">
                <button type="button" onClick={() => handleClick(id)}>Add to cart</button>
            </div>
        </div>     
    );
}

export default Product;