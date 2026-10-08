import  { type User } from '../api/users';

const DUMMY_PICTURE = 'https://thumbs.dreamstime.com/b/none-102846161.jpg?w=768';

export function UserCard(user: User) {
    return (
        <div key={user.id} className='userCard'>
            <div>{user.firstName} {user.lastName}</div>
            <div>
            {user.avatar?.map((avt) => (
                <img key={avt.uid} height={100} width={100} src={DUMMY_PICTURE} />)
            )}
            </div>
        </div>
    );
}