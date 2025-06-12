import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ChapterView from './components/ChapterView';
import TestView from './components/TestView';
import Home from './pages/Home';
import Contents from './components/Contents';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contents" element={<Contents />} />
            <Route path="/chapter/:id" element={<ChapterView />} />
            <Route path="/chapter/tests/*" element={<TestView />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}