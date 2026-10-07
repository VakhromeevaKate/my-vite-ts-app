import { ClientCard } from "../components/ClientCard";
import { getClients } from "../api/clients";
import {
  useQuery,
} from '@tanstack/react-query'

export function ClientsPage () {
    const {data, refetch, isLoading, isFetching} = useQuery({ queryKey: ['clients'], queryFn: getClients });
    const loading = isFetching || isLoading;


    return (
       <div>
            <div>
                <h1>Clients list</h1>
                </div>
                    <button
                        type="button"
                        className="counter"
                        onClick={() => refetch()}
                    >
                    Update client list
                </button>
                <div className='clientsContainer'>
                    {loading && <h1>Clients list loading...</h1>}
                    {!loading && data?.data.map((client) => <ClientCard {...client} />)}
            </div>
       </div>
    );
}