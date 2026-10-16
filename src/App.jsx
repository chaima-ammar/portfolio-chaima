

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from './components/Navbar';
import Acceuil from './pages/Acceuil';
import Apropos from './pages/Apropos';
import Footer from './components/Footer';
import Competence from './pages/Competence';
import Projets from './pages/Projets';
import Contact from './pages/Contact'

function App() {
  return (

    <BrowserRouter>
      <MyNavbar />

 <main style={{ minHeight: '70vh' }}>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/competence" element={<Competence/>}/>
        <Route path="/projets" element={<Projets/>}/>

      </Routes>
</main>
      <Footer/>
    
    </BrowserRouter>
   
  );
}

export default App;

