import { FileCard } from "../components/FileCard";
import { getFiles } from "../api/files";
import { useQuery } from '@tanstack/react-query';

export function FilesPage() {
  const { data, refetch, isLoading, isFetching } = useQuery({
    queryKey: ['files'],
    queryFn: getFiles,
  });
  const loading = isFetching || isLoading;

  return (
    <div>
      <div>
        <h1>Files list</h1>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => refetch()}
      >
        Update files list
      </button>
      <div className="usersContainer">
        {loading && <h1>Files list loading...</h1>}
        {!loading && data?.data?.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}