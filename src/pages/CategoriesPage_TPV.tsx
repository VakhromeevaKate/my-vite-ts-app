import { CategoryCard_TPV } from "../components/CategoryCard_TPV";
import { getCategories } from "../api/categories";
import { useQuery } from '@tanstack/react-query';

export function CategoriesPage_TPV() {
  const { data, refetch, isLoading, isFetching } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const loading = isFetching || isLoading;

  return (
    <div>
      <div>
        <h1>Categories list (TPV)</h1>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => refetch()}
      >
        Update categories list
      </button>
      <div className='usersContainer'>
        {loading && <h1>Categories list loading...</h1>}
        {!loading && data?.data.map((category) => (
          <CategoryCard_TPV key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}