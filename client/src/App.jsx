import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function Placeholder({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Placeholder title="Rooms" />} />
      <Route path="/events" element={<Placeholder title="Events" />} />
      <Route path="/gallery" element={<Placeholder title="Gallery" />} />
      <Route path="/contact" element={<Placeholder title="Contact" />} />
    </Routes>
  );
}