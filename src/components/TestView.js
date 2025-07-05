import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function TestView() {
    const {'*': testPath} = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const loadTest = async () => {
            try {
                const response = await fetch(`/phon_stud_app/chapters/tests/${testPath}`);
                const html = await response.text();
                setContent(html);
            } catch (error) {
                setContent(`<p>Ошибка загрузки теста: ${error.message}</p>`);
            }
        };

        loadTest();
    }, [testPath]);

    useEffect(() => {
        console.log(`Trying to load image from: /phon_stud_app/chapters/tests/${testPath}`);
    }, [testPath]);

    return (
        <div className="test-container">
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    );
}