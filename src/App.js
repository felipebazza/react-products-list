import './App.css';
import ProductList from './components/ProductList';
import Search from './components/Search';

function App() {
    return (
        <div className="App">
            <header className="App-header container">
                <h1 className='header__title'>React Product List</h1>
                <Search />
            </header>
            <ProductList />
        </div>
    );
}

export default App;
