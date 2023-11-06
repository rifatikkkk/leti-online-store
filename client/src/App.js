import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ProductsPage from './pages/ProductsPage';
import Authorization from './pages/Authorization';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Main />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/authorization' element={<Authorization />} />
      <Route path='/orders' element={<OrderPage />} />
    </Routes>
  )
}

export default App;
