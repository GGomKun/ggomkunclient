import React from "react";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import { Like } from "./page/Like";
import { LikeDetail } from "./page/Like/LikeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/like" element={<Like />} />
      <Route path="/like/detail" element={<LikeDetail />} />
    </Routes>
  );
}

export default App;
