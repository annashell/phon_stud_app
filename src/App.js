import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
import ChapterView from './components/ChapterView';
import TestView from './components/TestView';
import Home from './pages/Home';
import Contents from './components/Contents';
import Layout from "./components/Layout";

export default function App() {
    const title = "История фонетических исследований";

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Layout>
            <Routes>
                <Route path="/phon_stud_app/" element={<Home/>}/>
                <Route path="/phon_stud_app/contents" element={<Contents/>}/>
                <Route path="/phon_stud_app/chapter/:id" element={<ChapterView/>}/>
                <Route path="/phon_stud_app/chapter/tests/*" element={<TestView/>}/>
            </Routes>
        </Layout>
    );
}