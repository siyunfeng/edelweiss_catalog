import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import SingleProducts from './components/SingleProducts';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link to='/'>
            <img
              src='https://static.wixstatic.com/media/9067a8_f4d97003e1914861b30db64bbf03bda1~mv2.png/v1/fill/w_394,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vicki%20-%204%20rays%20tweaked.png'
              className='App-logo'
              alt='logo'
            />
          </Link>
        </header>
      </div>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/catalogs/:catalogId' Component={AllProducts} />
        <Route exact path='/products/:productId' Component={SingleProducts} />
      </Routes>
    </Router>
  );
}

export default App;
