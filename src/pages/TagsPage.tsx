import { getTags } from "../api/tags";
import { useQuery } from "@tanstack/react-query";

export function TagsPage() {
    const { data, refetch, isLoading, isFetching } = useQuery({
        queryKey: ["tags"],
        queryFn: getTags,
    });

    const loading = isFetching || isLoading;

    return (
        <div>
            <div>
                <h1>Tags list</h1>
            </div>

            <button
                type="button"
                className="counter"
                onClick={() => refetch()}
            >
                Update tags list
            </button>

            <div className="usersContainer">
                {loading && <h1>Tags list loading...</h1>}

                {!loading && data?.data.map((tag) => (
                    <div key={tag.id} className="userCard">
                        {tag.title}
                    </div>
                ))}
            </div>
        </div>
    );
}