import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage';
import { PostsPage } from './pages/PostsPage';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f0f0f0' }}>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/posts">Посты</NavLink>
      </nav>

      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;