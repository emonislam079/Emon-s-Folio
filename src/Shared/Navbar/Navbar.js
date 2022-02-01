import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler btn btn-light text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon bg-secondary"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "10px 20px",
            }}
          >
            Home
          </Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                to="/aboutme"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 20px",
                }}
              >
                About Me
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/skills"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 20px",
                }}
              >
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/projects"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 20px",
                }}
              >
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/blogs"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 20px",
                }}
              >
                Blogs
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 20px",
                }}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
