import './style.css';
import Product from "../Product";
import { Fragment } from 'react';

function MenuContainer({ products, handleClick }) {    
    return(
        <div className="Products">
            { products.map(product => 
                <div className="DivProduct">
                    <Product key={product.id}
                             name={product.name}
                             category={product.category}
                             price={product.price}
                             handleClick={handleClick}/>
                    <div className="BtnAddCart">
                        <button type="button" onClick={() => handleClick(product.id)}>Add to cart</button>
                    </div>
                </div>   
            )}
        </div>
    );
}

export default MenuContainer;