import { EventCard } from "../components/EventCard";
import { getEvents } from "../api/events";
import { useQuery } from '@tanstack/react-query';

export function EventsPage() {
    const { data, refetch, isLoading, isFetching } = useQuery({
        queryKey: ['events'],
        queryFn: getEvents
    });

    const loading = isFetching || isLoading;

    return (
        <div>
            <div>
                <h1>Events list</h1>
            </div>

            <button
                type="button"
                className="counter"
                onClick={() => refetch()}
            >
                Update events list
            </button>

            <div className="usersContainer">
                {loading && <h1>Events list loading...</h1>}
                {!loading && data?.data.map((event) => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
}