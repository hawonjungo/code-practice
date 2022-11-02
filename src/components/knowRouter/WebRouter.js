import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavRouter from "./NavRouter";
import Contact from "./pages/Contact";
import News from "./pages/News";
const WebRouter = () => {
  return (
    <div>
      <NavRouter />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default WebRouter;
