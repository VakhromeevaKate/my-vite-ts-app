import  { type Organization } from '../api/organizations';

export function OrganizationCard(organization: Organization) {
    return (
        <div key={organization.id} className='organizationCard'>
            <div>{organization.name}</div>    
        </div>
    );
}