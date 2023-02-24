import React from "react";
import { Link } from "react-router-dom";
import blog from "../images/blog-1.jpg"
export default function BlogCards() {
  return (
    <>
    
        <div className="card blog-content" style={{ width: "100%" }}>
          <img src={blog} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
          <p className="data">1 Jan, 2023</p>
            <h5 className="card-title">A Beautiful Sunday Morning Exercise</h5>
            <p className="card-text desc">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/blog/:id" className="button ">
              Read More
            </Link>
          </div>
        </div>
    
    </>
  );
}
 