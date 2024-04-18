import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Description from "./pages/description";
<<<<<<< HEAD
import History from "./pages/history";

=======
import Community from "./pages/community";
>>>>>>> 52fbbb67a0c677034ad254f9604ef6a7db955a07

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="description" element={<Description />} />
<<<<<<< HEAD
        <Route path="history" element={<History />} />
=======
        <Route path="community" element={<Community />} />
>>>>>>> 52fbbb67a0c677034ad254f9604ef6a7db955a07
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
