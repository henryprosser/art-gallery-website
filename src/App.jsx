import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Location from "./pages/Location.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      {/* Nav */}
    </BrowserRouter>
  );
}

export default App;
