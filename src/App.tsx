import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, NavLink } from "react-router-dom";

import { UsersPage } from './pages/UsersPage';
import { OrganizationUsersPage } from './pages/OrganizationUsersPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

import './App.css'

const queryClient = new QueryClient();

function App() {

 

  return (
    <QueryClientProvider client={queryClient}>
      <section id="center">
        <nav>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/users">User List</NavLink>
          <NavLink to="/organization_users">Organization Users</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path="/organization_users" element={<OrganizationUsersPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </section>
    </QueryClientProvider>
  )
}

export default App
