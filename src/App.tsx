import React from "react";
import { Route, Routes } from "react-router-dom";
import Album from "./pages/Album";
import PhotoDetail from "./pages/PhotoDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Album />} />
      <Route path="/photo/:id" element={<PhotoDetail />} />
    </Routes>
  );
}

export default App;
