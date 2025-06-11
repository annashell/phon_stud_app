import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { chapters } from '../content';

export default function ChapterView() {
  const { id } = useParams();
//  const navigate = useNavigate();
  const [content, setContent] = useState('');
  let chapter = chapters.find(c => c.id === id);

  if (!chapter) {
    chapter = chapters.find(c => c.id === id.split('.')[0]);
  }

  useEffect(() => {
    if (chapter) {
      fetch(chapter.file)
        .then(response => response.text())
        .then(html => setContent(html));
    }
  }, [id, chapter]);

  if (!chapter) return <div>Глава не найдена</div>;

  return (
    <div className="chapter-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}