import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {chapters} from '../content';

export default function ChapterView() {
    const {id} = useParams();
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
        console.log("chapter", chapter);
    }, [id, chapter]);

    if (!chapter) return <div>Глава не найдена</div>;
    console.log("content", content);
    return (
        <div className="chapter-content">
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    );
}