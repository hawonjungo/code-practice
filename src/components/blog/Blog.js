import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Blog page</h1>
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
