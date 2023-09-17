import { createRoot } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImageFromUser from './pages/ImageFromUser.tsx';
import ImageImport from './pages/ImageImport.tsx';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/imagefromusertsx" element={<ImageFromUser />} />
      <Route path="/imageimport" element={<ImageImport />} />
    </Routes>
  </BrowserRouter>
);