import type { FileRecord } from '../api/files';

interface FileCardProps {
  file: FileRecord;
}

export function FileCard({ file }: FileCardProps) {
  return (
    <div className="fileCard">
      <h3>{file.name}</h3>
      <p>Тип: {file.type}</p>
      <p>Размер: {file.size} байт</p>
      <p>Статус: {file.status}</p>
      <p>Прогресс: {file.percent}%</p>
      <a href={file.url} target="_blank" rel="noopener noreferrer">
        Открыть
      </a>
    </div>
  );
}