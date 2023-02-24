import React from 'react'
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import watch from "../images/watch.jpg"
export default function CompareProductCard(props) {
  console.log(props);
  return (
   <>
    <div className="col-lg-3 col-12 compare-product-card">
    <Link className="card  position-relative " style={{ width: "100%" }}>
        <div className="row d-flex">

        <div className="col-12 col-sm-12 ">
        <Link>
            <RxCross2 className="heart-icon position-absolute" />
          </Link>
          <img
            src={watch}
            className="card-img-top img-fluid product-image"
            alt="product image"
          />
        </div>
        
        <div className="col-12 col-sm-12  ">
        <div className="card-body px-4 ">
            <h6>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h6>
            <p className="price mb-3">₹150.00</p>
           <div className=" d-flex justify-content-between align-items-center data-list mb-3">
             <h5 className='mt-2'>Brand</h5> 
            <h6 className='mt-2'>Havels</h6>
           </div>
           <div className=" d-flex justify-content-between align-items-center data-list mb-3">
             <h5 className='mt-2'>Type</h5> 
            <h6 className='mt-2'>Watch</h6>
           </div>
           <div className=" d-flex justify-content-between align-items-center data-list mb-3">
             <h5 className='mt-2'>Availability</h5> 
            <h6 className='mt-2'>In-Stock</h6>
           </div>         
           <div className=" d-flex justify-content-between align-items-center data-list mb-3">
             <h5 className='mt-2'>Color</h5> 
             <ul className="colors ps-0 mt-2">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
           </div>
           <div className=" d-flex justify-content-between align-items-center data-list mb-3">
             <h5 className='mt-2'>Size</h5> 
            <h6 className='mt-2'>S M</h6>
           </div>
          </div>
        </div>
           
        </div>
          
         
        </Link>
    </div>
   </>
  )
}
