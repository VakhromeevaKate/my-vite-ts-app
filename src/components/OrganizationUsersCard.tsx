import { type OrganizationUser } from '../api/organization_users';

export function OrganizationUserCard(user: OrganizationUser) {
  return (
    <div key={user.id} className="organizationUserCard">
      <div><strong>ID:</strong> {user.id}</div>
      <div><strong>Name:</strong> {user.name}</div>
      <div><strong>Email:</strong> {user.email}</div>
      <div>
        <strong>Organizations:</strong>{' '}
        {user.organizations?.join(', ')}
      </div>
    </div>
  );
}