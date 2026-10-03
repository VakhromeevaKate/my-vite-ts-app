import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '../api/categoriesApi';

export const CategoriesPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesApi.getAll,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div>
      <h1>Список категорий</h1>
      <ul>
        {data?.map((category) => (
          <li key={category.id}>
            {category.id}: {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
