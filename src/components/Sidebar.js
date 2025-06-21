import {Link} from 'react-router-dom';
import {chapters} from '../content';

export default function Sidebar() {
    const chapters_ = chapters.filter(c => c.is_in_content);
    return (
        <div className="sidebar">
            <h3>Содержание</h3>
            <ul>
                {chapters_.map(chapter => (
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