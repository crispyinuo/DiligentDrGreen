import './App.css';
import './style.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Description from "./pages/description";
import History from "./pages/history";
import Identify from "./pages/identify";
import Community from "./pages/community";
import Camera from "./pages/camera";
import ConfirmPhoto from "./pages/confirmPhoto";

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
            <Route path="identify" element={<Identify />} />
            <Route path="confirm" element={<ConfirmPhoto />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
