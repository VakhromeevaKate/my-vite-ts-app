import { OrganizationCard } from "../components/OrganizationCard_GAP";
import { getOrganizations } from "../api/organizations";
import {
  useQuery,
} from '@tanstack/react-query'

export function OrganizationsPage_GAP () {
    const {data, refetch, isLoading, isFetching} = useQuery({ queryKey: ['organizations'], queryFn: getOrganizations });
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
                <div className='organizationsContainer'>
                    {loading && <h1>Organizations list loading...</h1>}
                    {!loading && data?.data.map((organization) => <OrganizationCard {...organization} />)}
            </div>
       </div>
    );
}