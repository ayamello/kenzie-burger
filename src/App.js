import { useState } from 'react';
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
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
        setFilteredProducts([products.filter(product => product.name === textInput)]);
        setTextInput("");
    }

    function handleClick(productId) {
        const currentProduct = products.find(product => product.id === productId);
        setCurrentSale([...currentSale, currentProduct]);
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

            <div>
                <h2>Menu</h2>

                <div>
                    <input type="text" placeholder="search product"
                           value={textInput}  
                           onChange={(e) => setTextInput(e.target.value)} />
                    <SearchIcon/>
                </div>
            </div>

            <MenuContainer products={products} handleClick={handleClick} />

            <footer>
                <span>&copy; dev@ Ayana Mello</span>
            </footer>
        </div>
    );
}

export default App;