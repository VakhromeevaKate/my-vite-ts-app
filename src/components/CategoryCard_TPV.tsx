import { type Category } from '../api/categories';

export function CategoryCard_TPV(category: Category) {
  return (
    <div key={category.id} className='categoryCard'>
      <div>{category.title}</div>
      <div>ID: {category.id}</div>
    </div>
  );
}