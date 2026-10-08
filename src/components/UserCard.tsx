import  { type User } from '../api/users';
// import { useUsers } from '../stores/UsersStore';

const DUMMY_PICTURE = 'https://thumbs.dreamstime.com/b/none-102846161.jpg?w=768';

type UserCardProps = User & {isSelected: boolean, setUserSelected: (id: number) => void}

export function UserCard(user: UserCardProps) {
    // const { selectUser, selectedUserId, removeSelectedUser } = useUsers();
    // const [selected, setSelected] = useState<boolean>(false);

    const handleClick = () => {
        // if (!selectedUserId) {
        //     selectUser(user)
        // } else {
        //     removeSelectedUser()
        // }
        user.setUserSelected(user?.id);
    }



    return (
        <div key={user.id} className={user.isSelected ? 'selectedUserCard' : 'userCard'} onClick={handleClick}>
        {/* <div key={user.id} className={selectedUserId === user.id ? 'selectedUserCard' : 'userCard'} onClick={handleClick}> */}
            <div>{user.firstName} {user.lastName}</div>
            <div>
            {user.avatar?.map((avt) => (
                <img key={avt.uid} height={100} width={100} src={DUMMY_PICTURE} />)
            )}
            </div>
        </div>
    );
}