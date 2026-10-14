import { useQuery } from '@tanstack/react-query';
import { getSamples } from '../api/samples';

export function SamplesPage() {
  const { data, refetch, isLoading, isFetching } = useQuery({
    queryKey: ['samples'],
    queryFn: getSamples,
  });

  const loading = isFetching || isLoading;

  return (
    <div>
      <div>
        <h1>Samples list</h1>
      </div>

      <button
        type="button"
        className="counter"
        onClick={() => refetch()}>

        Update samples list
      </button>

      <div>
        {!loading &&
          data?.data.map((sample) => (
            <div key={sample.id}>
              <h2>{sample.title}</h2>
              <p>{sample.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
