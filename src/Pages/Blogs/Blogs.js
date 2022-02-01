import React from "react";
import "./Blogs.css";

// use Typical for animation on text
import Typical from "react-typical";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div>
        <h1>
          <Typical loop={Infinity} steps={["Blogs are Coming Soon...", 3000]} />
        </h1>
      </div>
    </div>
  );
};

export default Blogs;
