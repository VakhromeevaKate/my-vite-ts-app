import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/posts_tma';

export function PostsPage_TMA() {
    const { data, refetch, isLoading, isFetching } = useQuery({
        queryKey: ['posts-tma'],
        queryFn: getPosts,
    });
    const loading = isFetching || isLoading;

    return (
        <div>
            <div>
                <h1>Posts list</h1>
            </div>
            <button type="button" className="counter" onClick={() => refetch()}>
                Update posts list
            </button>
            <div>
                {loading && <h1>Posts list loading...</h1>}
                {!loading &&
                    data?.data.map((post) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}