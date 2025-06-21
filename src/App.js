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
                <Route path="/" element={<Home/>}/>
                <Route path="/contents" element={<Contents/>}/>
                <Route path="/chapter/:id" element={<ChapterView/>}/>
                <Route path="/chapter/tests/*" element={<TestView/>}/>
            </Routes>
        </Layout>
    );
}