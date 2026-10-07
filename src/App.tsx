import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

import { getUsers, type User } from './api/users'
import BlogCategoriesPage from './Pages/BlogCategoriesPage'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <nav>
        <NavLink to="/">Users</NavLink>
        {' | '}
        <NavLink to="/blogcategories">Blog Categories</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <section id="center">
              <h1>Users</h1>

              {loading ? (
                <h2>Users loading...</h2>
              ) : (
                <div className="usersContainer">
                  {users.map((user) => (
                    <div key={user.id} className="userCard">
                      <h2>{user.firstName}</h2>
                      <div>{user.email}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          }
        />

        <Route
          path="/blogcategories"
          element={<BlogCategoriesPage />}
        />
      </Routes>
    </>
  )
}

export default App