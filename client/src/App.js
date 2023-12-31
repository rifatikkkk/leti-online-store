import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ProductsPage from './pages/ProductsPage';
import Authorization from './pages/Authorization';
import CartPage from './pages/CartPage';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Main />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/authorization' element={<Authorization />} />
      <Route path='/orders' element={<CartPage />} />
    </Routes>
  )
}

export default App;
