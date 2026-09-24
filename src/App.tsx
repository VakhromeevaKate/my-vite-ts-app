import { useState, useEffect } from 'react'
import './App.css'
import  { getUsers, type User } from './api/users';

const DUMMY_PICTURE = 'https://thumbs.dreamstime.com/b/none-102846161.jpg?w=768';

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
  }

  useEffect(() => {
    loadUserList()
  }, []);

  return (
    <>
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
                  <img key={avt.uid} height={100} width={100} src={DUMMY_PICTURE} />)
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
