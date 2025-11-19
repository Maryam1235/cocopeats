import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BidhaaPage from './pages/Bidhaa';
import MatumiziPage from './pages/Matumizi';
import KuhusuPage from './pages/Kuhusu';
import WasilianaPage from './pages/Wasiliana';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bidhaa" element={<BidhaaPage />} />
            <Route path="/matumizi" element={<MatumiziPage />} />
            <Route path="/kuhusu" element={<KuhusuPage />} />
            <Route path="/wasiliana" element={<WasilianaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
