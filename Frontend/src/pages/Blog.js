import React from 'react'
import BlogCards from '../components/BlogCards';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

export default function Blog() {
  return (
    <>
      <Meta title="Blogs"></Meta>
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-sm-3">
                <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Category</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camer</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
                </div>
                <div className="col-sm-9 d-flex">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 mb-3">
                            <BlogCards/>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <BlogCards/>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <BlogCards/>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <BlogCards/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
