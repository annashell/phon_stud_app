import { Link } from 'react-router-dom';
import { chapters } from '../content';

export default function Contents() {
  return (
    <div className="contents-page">
      <h2>Содержание учебника</h2>
      <ul className="contents-list">
        {chapters.map(chapter => (
          <li key={chapter.id}>
            <Link to={`/chapter/${chapter.id}`}>
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}