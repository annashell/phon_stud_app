import { useParams } from 'react-router-dom';
import { lessons } from '../data';

export default function LessonPage() {
  const { id } = useParams();
  const lesson = lessons.find(lesson => lesson.id === Number(id));

  if (!lesson) return <div>Урок не найден!</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="mb-6">{lesson.content}</p>
    </div>
  );
}