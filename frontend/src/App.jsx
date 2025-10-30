import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPageDokumen from './components/ListPageDokumen';
import ListPageAcara from './components/ListPageAcara';
import ListPageMahar from './components/ListPageMahar';
import ListPageKonsumsi from './components/ListPageKonsumsi';
import ListPageLainnya from './components/ListPageLainnya';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPageDokumen />} />
        <Route path="/acara" element={<ListPageAcara />} />
        <Route path="/mahar" element={<ListPageMahar />} />
        <Route path="/konsumsi" element={<ListPageKonsumsi />} />
        <Route path="/lainnya" element={<ListPageLainnya />} />
      </Routes>
    </Router>
  )
}

export default App
