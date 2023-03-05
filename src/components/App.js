import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../styles/App.css"
import Layout from "./Layout";
import Home from './pages/Home';
import Singup from './pages/Singup';
import Singin from './pages/Singin';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/login" element={<Singin />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout >
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
