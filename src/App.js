import { useState } from 'react';
import './App.css';
import { Search, ShoppingCart, LinkedIn, GitHub } from '@material-ui/icons';
import MenuContainer from './components/MenuContainer';

function App() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Hamburger', category: 'Sandwich', price: 7.99 },
        { id: 2, name: 'X-Burger', category: 'Sandwich', price: 8.99 },
        { id: 3, name: 'X-Salad', category: 'Sandwich', price: 10.99 },
        { id: 4, name: 'Big Kenzie', category: 'Sandwich', price: 16.99 },
        { id: 5, name: 'Guarana', category: 'Drink', price: 4.99 },
        { id: 6, name: 'Coca', category: 'Drink', price: 4.99 },
        { id: 7, name: 'Fanta', category: 'Drink', price: 4.99 },
    ]);

    const [textInput, setTextInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [currentSale, setCurrentSale] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    function showProducts(textInput) {
        setProducts([products.filter(product => product.name === textInput)]);
        setTextInput("");
    }

    function handleClick(productId) {
        const currentProduct = products.find(product => product.id === productId);
        setCurrentSale([...currentSale, currentProduct]);
    }

    function showCart() {
        setProducts([currentSale]);
    }

    return(
        <div className="App">
            <header className="App-Header">
                <h1>Kenzie Burger</h1>

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            <div className="Cover">
                <h2>Menu</h2>
            </div>

            <div className="Tools">     
                <button className="BtnCart" type="button" onClick={showCart}>
                    <ShoppingCart style={{ fontSize: 35 }} />
                </button>  

                <div className="SearchBar">
                    <input type="text" placeholder="search product"
                        value={textInput}  
                        onChange={(e) => setTextInput(e.target.value)} />
                        
                    <button type="button" onClick={() => showProducts(textInput)}><Search/></button>
                </div>
            </div>

            <MenuContainer products={products} handleClick={handleClick} />

            <footer>
                <p>Developed by Ayana Mello</p>
                <div className="DevSocial">
                    <a href="https://www.linkedin.com/in/ayana-mello/"><LinkedIn/></a>
                    <a href="https://github.com/ayanamello"><GitHub/></a>
                </div>
            </footer>
        </div>
    );
}

export default App;