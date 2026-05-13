import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Course from './pages/Course';
import Methodology from './pages/Methodology';
import Corporate from './pages/Corporate';
import Contact from './pages/Contact';
import Professors from './pages/Professors';
import Partnerships from './pages/Partnerships';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cursos" element={<Home />} />
          <Route path="cursos/:id" element={<Course />} />
          <Route path="metodologia" element={<Methodology />} />
          <Route path="professores" element={<Professors />} />
          <Route path="convenios" element={<Partnerships />} />
          <Route path="empresas" element={<Corporate />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
