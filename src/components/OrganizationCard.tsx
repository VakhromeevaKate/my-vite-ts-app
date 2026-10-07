import { type Organization } from '../api/organizations';

export function OrganizationCard(org: Organization) {
    return (
        <div key={org.id} className='userCard'>
            <div><strong>{org.name}</strong></div>
            <div>Slug: {org.slug}</div>
            <div>Email: {org.email}</div>
            <div>Country: {org.country}</div>
            <div>Address: {org.address}</div>
            <div>Phone: {org.phone}</div>
            <div>Owner: {org.owner_name} ({org.owner_email})</div>
            <div>User IDs: {org.userIds.join(', ')}</div>
        </div>
    );
}