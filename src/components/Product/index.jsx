import './style.css';

function Product({ id, name, category, price, handleClick }) {
    return (
        <div className="DivProduct">
             <div className="Infos">
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <span>Price: ${price}</span>
            </div>

            <div className="BtnAddCart">
                <button type="button" onClick={() => handleClick(id)}>Add to cart</button>
            </div>
        </div>     
    );
}

export default Product;