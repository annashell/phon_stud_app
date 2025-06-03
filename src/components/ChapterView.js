import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { chapters } from '../content';

export default function ChapterView() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const chapter = chapters.find(c => c.id === id);

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