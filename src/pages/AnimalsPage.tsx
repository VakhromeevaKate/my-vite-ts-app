// src/pages/AnimalsPage.tsx
import { useQuery } from '@tanstack/react-query';
import { animalsApi } from '../api/animals'; // Путь к файлу

export const AnimalsPage = () => {
  const { data: animals, isLoading, error } = useQuery({
    queryKey: ['animals'],
    queryFn: () => animalsApi.getAll(), // <-- ВЫЗЫВАЕМ МЕТОД ИЗ ОБЪЕКТА
  });

  if (isLoading) return <div>Загрузка животных...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div>
      <h1>Список животных</h1>
      <ul>
        {animals?.map((animal) => (
          <li key={animal.id}>
            <strong>{animal.name}</strong> — {animal.type} (Категория: {animal.category})
          </li>
        ))}
      </ul>
    </div>
  );
};