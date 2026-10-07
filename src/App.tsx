import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import UsersPage from './pages/UsersPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/product-detail">Product Detail</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
