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
import DetailsPage from './components/detail';
import ConfirmPhoto from "./pages/confirmPhoto";
import Login from "./pages/login";
import Feed from "./pages/feed";
import TutorialOne from "./pages/tutorial1";
import TutorialTwo from "./pages/tutorial2";
import TutorialThree from "./pages/tutorial3";

export default function App() {
  return (
    <div>
      <div className="mobile-view-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="description" element={<Description />} />
            <Route path="history" element={<History />} />
            <Route path="community" element={<Community />} />
            <Route path="camera" element={<Camera />} />
            <Route path="identify" element={<Identify />} />
            <Route path="details" element={<DetailsPage />} />
            <Route path="confirm" element={<ConfirmPhoto />} />
            <Route path="feed" element={<Feed />} />
            <Route path="tutorialone" element={<TutorialOne />} />
            <Route path="tutorialtwo" element={<TutorialTwo />} />
            <Route path="tutorialthree" element={<TutorialThree />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
