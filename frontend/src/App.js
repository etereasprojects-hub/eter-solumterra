import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropuestaPage from "./pages/PropuestaPage";
import PrototipoPage from "./pages/PrototipoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PropuestaPage />} />
          <Route path="/prototipo" element={<PrototipoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;