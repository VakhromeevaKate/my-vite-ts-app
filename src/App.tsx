import { useState, useEffect } from 'react';
import './App.css';
import { getUsers, type User } from './api/users';
import { Routes, Route, NavLink } from 'react-router-dom';
import { CategoriesPage } from './pages/CategoriesPage';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadUserList = () => {
    setLoading(true);
    getUsers().then((userList) => {
      if (userList) {
        setTimeout(() => {
          setUsers(userList.data);
        }, 10000);
      }
    }).finally(() => setLoading(false));
  };

  useEffect(() => {
    loadUserList();
  }, []);

  return (
    <div>
      <nav style={{ padding: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <NavLink to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Пользователи</NavLink>
        <NavLink to="/categories" style={{ color: 'blue', textDecoration: 'underline' }}>Категории</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={
          <section id="center">
            <div>
              <h1>Users list</h1>
            </div>
            <button
              type="button"
              className="counter"
              onClick={() => loadUserList()}
            >
              Update user list
            </button>
            <div className='usersContainer'>
              {loading && <h1>Users list loading...</h1>}
              {!loading && users.map((user) => (
                <div key={user.id} className='userCard'>
                  <div>{user.firstName} {user.lastName}</div>
                  <div>
                    {user.avatar?.map((avt) => (
                      <img key={avt.uid} height={100} width={100} src={avt.url} alt="" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        } />
        
        <Route path="/categories" 
        element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
