import { UserCard } from "../components/UserCard";
import { getUsers } from "../api/users";
import {
  useQuery,
} from '@tanstack/react-query'

export function UsersPage () {
    const {data, refetch, isLoading, isFetching} = useQuery({ queryKey: ['users'], queryFn: getUsers });
    const loading = isFetching || isLoading;


    return (
       <div>
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
                <div className='usersContainer'>
                    {loading && <h1>Users list loading...</h1>}
                    {!loading && data?.data.map((user) => <UserCard {...user} />)}
            </div>
       </div>
    );
}