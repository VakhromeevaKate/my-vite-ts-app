import { useQuery } from '@tanstack/react-query';
import { postsApi } from '../api/posts';

export const PostsPage = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => postsApi.getAll(),
  });

  if (isLoading) return <div>Загрузка постов...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};