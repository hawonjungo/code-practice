import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavRouter from "./NavRouter";
import Contact from "./pages/Contact";
import News from "./pages/News";

const WebRouter = () => {
  //BrowserRouter working as Routing mechanism for whole website ( if wrap them all)
  return (
    <div>
      <BrowserRouter>
        <NavRouter />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default WebRouter;
