import './style.css';

function ShowSale(props) {
    const cart = props.cart
    return (
        <div className="CurrentCart">
            {cart.map(item => 
                <div key={item.id} className="CartProducts">
                    <h3>{item.name}</h3>
                    <p>Category: {item.category}</p>
                    <span>Price: ${item.price}</span>
                </div>
            )}
        </div>     
    );
}

export default ShowSale;