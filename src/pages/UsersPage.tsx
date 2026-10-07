import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/users';

const DUMMY_PICTURE = 'https://thumbs.dreamstime.com/b/none-102846161.jpg?w=768';

function UsersPage() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <h1>Users list loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error instanceof Error ? error.message : 'Unknown error'}</h1>;
  }

  return (
    <section id="center">
      <div>
        <h1>Users list</h1>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => refetch()}
      >
        Update user list
      </button>
      <div className="usersContainer">
        {data?.data.map((user) => (
          <div key={user.id} className="userCard">
            <div>{user.firstName} {user.lastName}</div>
            <div>
              {user.avatar?.map((avt) => (
                <img key={avt.uid} height={100} width={100} src={DUMMY_PICTURE} alt={user.firstName} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UsersPage;