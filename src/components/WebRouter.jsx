import React from "react";

import "../index.css";
import * as serviceWorker from "../serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Blog, Posts, Post } from ".";
import TodoReducer from "./practice/TodoListWithReducer";

function WebRouter() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route>
        <Route path="/todoWithReducer" element={<TodoReducer />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

serviceWorker.unregister();

export default WebRouter;
