import React, { useState,useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import tab from "../images/tab.jpg"
import headphone from "../images/headphone.jpg"
import gr4 from "../images/gr4.svg"
import gr3 from "../images/gr3.svg"
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../features/product/productSlice";




export default function OurStore() {
  const [grid,setGrid]=useState(4)
  const [open, setOpen] = useState(false);
  const [productId, setproductId] = useState("");
  const [select, setSelect] = useState("");
  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  const showModal = (e) => {
    setOpen(true);
    setproductId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [])
  const productState = useSelector((state) => state.product.products);
  console.log(productState)
  let sortedProducts = [...productState];
  
 if (select === "AtoZ") {
    sortedProducts.sort((a,b)=> a.brand.localeCompare(b.brand));
  } else if (select === "ZtoA") {
    sortedProducts.sort((a,b)=> b.brand.localeCompare(a.brand));
  } else if (select === "lowtohigh") {
    sortedProducts.sort((a,b)=> a.price - b.price);
  } else if (select === "hightolow") {
    sortedProducts.sort((a,b)=> b.price - a.price);
  } 

  console.log(sortedProducts);



  return (
    <>
      <Meta title="Our Store"></Meta>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row d-flex flex-md-row">
            <div className="col-md-3 d-none d-md-block ">
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
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        In Stock
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Out of Stock
                      </label>
                    </div>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex justify-content-center ">
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        S(2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        M(2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags flex-wrap d-flex align-items-center gap-10">
                    <span className="badge rounded-3 bg-light text-secondary py-1 px-3">
                      HeadPhone
                    </span>
                    <span className="badge rounded-3 bg-light text-secondary py-1 px-3">
                      Laptop
                    </span>
                    <span className="badge rounded-3 bg-light text-secondary py-1 px-3">
                      Mobile
                    </span>
                    <span className="badge rounded-3 bg-light text-secondary py-1 px-3">
                      More
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div className="random-products ">
                  <div className="card mb-3 " style={{ maxWidth: "auto" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={headphone}
                          className="img-fluid rounded-start"
                          alt="Watch"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Kids Headphone Bulk 10 Pack Multi Colored for
                            students
                          </h5>
                          <ReactStars
                            classNames="w-100 stars"
                            count={5}
                            size={25}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="price">₹150.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3 " style={{ maxWidth: "auto" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={tab}
                          className="img-fluid rounded-start"
                          alt="Watch"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Kids Headphone Bulk 10 Pack Multi Colored for
                            students
                          </h5>
                          <ReactStars
                            classNames="w-100 stars"
                            count={5}
                            size={25}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="price">₹150.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col--12 col-md-9 d-block">
              <div className="filter-sort-grid mb-3">
                <div className="row px- d-flex justify-content-between align-items-center">
                  <div className="col-md-4 d-flex flex-start justify-content-between align-items-center align-content-start mx-4 mx-md-2"  >
                  <p className="my-0">Sort By </p>
                  <select name="" value={select} onChange={handleSelect}  className="form-control form-select bg-light " id="" style={{width:"auto", border: "none"}} >
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected>Best Selling</option>
                    <option value="AtoZ">Alphabatically, A-Z</option>
                    <option value="ZtoA">Alphabatically, Z-A</option>
                    <option value="lowtohigh">Price, Low to High</option>
                    <option value="hightolow">Price, High to Low</option>
                   
                  </select>
                  </div>
                
                </div>
              </div>

              <div className="product-list pb-5 d-flex flex-wrap flex-sm-nowrap">
              { sortedProducts.map((item,i)=>{

if(item.tags==='special'){return (
  <ProductCard key={i} grid={item}/>
)}

})} 
                     
                      
                
                    
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
