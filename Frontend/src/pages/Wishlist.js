import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link ,useLocation} from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import watch from "../images/watch.jpg"
export default function Wishlist() {

  let location = useLocation();
  // const { grid } = location.state;
  console.log(location);
  const{ brand,category,color,description,images,price,quantity,ratings,slug,sold,tags,title,totalrating,}=location.state.grid;

  return (
    <>
      <Meta title="Wishlist"></Meta>
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-3">
              <Link
                className="card  position-relative "
                style={{ width: "100%" }}
              >
                <div className="row d-flex">
                  <div className="col-4 col-sm-6 col-md-12 ">
                    <Link>
                      <RxCross2 className="heart-icon position-absolute" />
                    </Link>
                    <img
                     src={images[0].url}
                      className="card-img-top img-fluid product-image"
                      alt="product image"
                    />
                  </div>
                  <div className="col-8 col-sm-6 col-md-12  ">
                    <div className="card-body px-4 ">
                      <h6>
                      {title}
                      </h6>
                      <p className="price mb-3">₹{price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link
                className="card  position-relative "
                style={{ width: "100%" }}
              >
                <div className="row d-flex">
                  <div className="col-4 col-sm-6 col-md-12 ">
                    <Link>
                      <RxCross2 className="heart-icon position-absolute" />
                    </Link>
                    <img
                          src={watch}
                      className="card-img-top img-fluid product-image"
                      alt="product image"
                    />
                  </div>
                  <div className="col-8 col-sm-6 col-md-12  ">
                    <div className="card-body px-4 ">
                      <h6>
                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G
                        Tablet
                      </h6>
                      <p className="price mb-3">₹150.00</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
