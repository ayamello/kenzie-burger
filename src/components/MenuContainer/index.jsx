import './style.css';
import Product from "../Product";

function MenuContainer({ products, handleClick }) {    
    return(
        <div className="Products">
            { products.map(product => 
                <Product key={product.id}
                         id={product.id}
                         name={product.name}
                         category={product.category}
                         price={product.price}
                         handleClick={handleClick}/>
            )}
        </div>
    );
}

export default MenuContainer;