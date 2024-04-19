import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Description from "./pages/description";
import History from "./pages/history";
import NavBar from './components/navBar';
import Community from "./pages/community";

export default function App() {
  return (
    <div>
      <div className="mobile-view-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="description" element={<Description />} />
            <Route path="history" element={<History />} />
            <Route path="community" element={<Community />} />
          </Routes>
        </BrowserRouter>
        <div className="nav-bar-container">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
