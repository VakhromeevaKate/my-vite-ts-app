import { OrganizationUserCard } from '../components/OrganizationUsersCard';
import { getOrganizationUsers } from '../api/organization_users';
import { useQuery } from '@tanstack/react-query';

export function OrganizationUsersPage() {
  const { data, refetch, isLoading, isFetching } = useQuery({
    queryKey: ['organization_users'],
    queryFn: getOrganizationUsers,
  });

  const loading = isFetching || isLoading;

  return (
    <div>
      <div>
        <h1>Organization Users list</h1>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => refetch()}
      >
        Update organization user list
      </button>
      <div className="organizationUsersContainer">
        {loading && <h1>Organization users list loading...</h1>}
        {!loading && data?.map((user) => (
          <OrganizationUserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}