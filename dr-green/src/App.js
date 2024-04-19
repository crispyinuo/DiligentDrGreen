import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Description from "./pages/description";
import History from "./pages/history";
import Community from "./pages/community";
import Camera from "./pages/camera";

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
            <Route path="camera" element={<Camera />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
