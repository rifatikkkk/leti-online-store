import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Main />} />
      <Route path='/products' element={<ProductsPage />} />
    </Routes>
  )
}

export default App;
