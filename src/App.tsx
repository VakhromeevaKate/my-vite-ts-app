import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, NavLink } from "react-router-dom";

import { UsersPage } from './pages/UsersPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { OrganizationsPage } from './pages/OrganizationsPage';

import './App.css'

const queryClient = new QueryClient();

function App() {



  return (
    <QueryClientProvider client={queryClient}>
      <section id="center">
        <nav>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/users">User List</NavLink>
          <NavLink to="/organizations">Organizations</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/organizations' element={<OrganizationsPage />} />
        </Routes>
      </section>
    </QueryClientProvider>
  )
}

export default App
