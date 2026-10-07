import { useQuery } from "@tanstack/react-query";
import { getblogcategory } from "../api/blog_posts";

function BlogCategoriesPage() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogcategories"],
    queryFn: getblogcategory,
  });

  if (isLoading) {
    return <h1>Categories loading...</h1>;
  }

  if (isError) {
    return <h1>Ошибка: {(error as Error).message}</h1>;
  }

  const categories = data?.data ?? [];

  return (
    <section id="center">
      <h1>Blog Categories</h1>

      <div className="usersContainer">
        {categories.map((category) => (
          <div key={category.id} className="userCard">
            <h2>{category.title}</h2>
            <div>{category.content}</div>
            <div>Статус: {category.status}</div>
            <div>Category ID: {category.categoryID}</div>
            <div>Создано: {category.createdAt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogCategoriesPage;