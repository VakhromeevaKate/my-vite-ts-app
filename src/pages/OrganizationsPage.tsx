import { OrganizationCard } from "../components/OrganizationCard";
import { getOrganizations } from "../api/organizations";
import {
    useQuery,
} from '@tanstack/react-query'

export function OrganizationsPage() {
    const { data, refetch, isLoading, isFetching } = useQuery({ queryKey: ['organizations'], queryFn: getOrganizations });
    const loading = isFetching || isLoading;

    return (
        <div>
            <div>
                <h1>Organizations list</h1>
            </div>
            <button
                type="button"
                className="counter"
                onClick={() => refetch()}
            >
                Update organizations list
            </button>
            <div className='usersContainer'>
                {loading && <h1>Organizations list loading...</h1>}
                {!loading && data?.data.map((org) => <OrganizationCard {...org} />)}
            </div>
        </div>
    );
}