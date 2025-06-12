import { Link } from 'react-router-dom';
import { chapters } from '../content';

export default function Contents() {
  return (
    <div className="contents-page">
      <h3>Содержание</h3>
      {chapters.map(chapter => {
        const level = chapter.id.split('-').length - 1;
        return (
          <div 
            key={chapter.id} 
            style={{ 
              paddingLeft: `${level * 40}px`,
              margin: '5px 0'
            }}
          >
            <Link to={`/chapter/${chapter.id}`}>
              {chapter.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}