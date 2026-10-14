import { TopicCard_AV } from "../components/TopicCard_AV";
import { getTopics } from "../api/topics";
import {
  useQuery,
} from '@tanstack/react-query'

export function TopicsPage_AV () {
    const {data, refetch, isLoading, isFetching} = useQuery({ queryKey: ['topics-av'], queryFn: getTopics });
    const loading = isFetching || isLoading;


    return (
       <div>
            <div>
                <h1>Topics list</h1>
                </div>
                    <button
                        type="button"
                        className="counter"
                        onClick={() => refetch()}
                    >
                    Update topics list
                </button>
                <div className='usersContainer'>
                    {loading && <h1>Topics list loading...</h1>}
                    {!loading && data?.data.map((topic) => <TopicCard_AV key={topic.id} {...topic} />)}
            </div>
       </div>
    );
}
