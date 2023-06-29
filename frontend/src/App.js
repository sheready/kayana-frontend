import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Board from './components/Board';
import Publications from './components/Publications';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/board" element={<Board/>} />
        <Route path="/publications" element={<Publications/>} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
