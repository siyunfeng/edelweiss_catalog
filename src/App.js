import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import logoText from './images/edelweiss-logo-text.png';
import logoIcon from './images/edelweiss-logo-icon.png';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link to='/'>
            <div className='App-logo-container'>
              <img src={logoText} className='App-logo' alt='logo-icon' />
              <img src={logoIcon} className='App-logo' alt='logo-text' />
            </div>
          </Link>
        </header>
      </div>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/catalogs/:catalogId' Component={AllProducts} />
        <Route exact path='/products/:productId' Component={SingleProduct} />
      </Routes>
    </Router>
  );
}

export default App;
