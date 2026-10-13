import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { BlogMonsoon } from './pages/BlogMonsoon';
import { BlogEarlyDetection } from './pages/BlogEarlyDetection';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/monsoon-waterproofing" element={<BlogMonsoon />} />
                <Route path="/blog/early-detection-thermal-scanning" element={<BlogEarlyDetection />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
