import './style.css';
import { Fragment } from 'react';

function Product({ name, category, price }) {
    return (
        <Fragment>
             <div className="Infos">
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <span>Price: ${price}</span>
            </div>
        </Fragment>     
    );
}

export default Product;