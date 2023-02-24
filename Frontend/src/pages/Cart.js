import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import {AiFillDelete} from "react-icons/ai"
import { Link ,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import{createcart,getcart} from '../features/product cart/cartSlice'
const Cart = () => {
    const dispatch = useDispatch();
    const location=useLocation();
    const{ brand,category,color,description,images,price,quantity,ratings,slug,sold,tags,title,totalrating,}=location.state;
    // onSubmit: (values) => {
    //     dispatch(createcart(values));
    //      setTimeout(() => {
          
    //     }, 3000);
    //   }
           
  return (
   <>
     <Meta title="Cart"></Meta>
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className=" card-header py-3 d-flex align-items-center justify-content-between">
                        <h5 className='cart-col-1'>Product</h5>
                        <h5 className='cart-col-2'>Price</h5>
                        <h5 className='cart-col-3'>Quantity</h5>
                        <h5 className='cart-col-4'>Total</h5>
                    </div>
                    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                            <div className='w-25'>
                                <img 
                                src={images[0].url}
                                alt="product image"
                                className='img-fluid' />
                            </div>
                            <div className="w-75">
                                    <h5 className='title'>{title}</h5>
                                    <p className='background'>color</p>
                                    <p className='quantity'>size</p>
                            </div>
                    </div>
                    <div className="cart-col-2 ">
                        <h5 className='price'>₹{price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-30">
                        <div>
                            <input 
                            className='form-control'
                            type="number"
                            name=''
                            min={1}
                            max={quantity}
                            id='' />
                        </div>
                        <div>
                        <AiFillDelete className='fs-3 text-danger '/>
                        </div>
                    </div>
                    <div className="cart-col-4">
                    <h5 className='price'>₹100</h5>
                    </div>
                    </div>

                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-center" >
                            <Link to="/product" className="button">
                                Continue to Shopping
                            </Link>
                            <div className="d-flex  flex-column align-items-end">
                            <h4>SubTotal :₹100</h4>
                            <p>Taxes and Shipping calculated at checkout</p>
                            <Link to="/checkout" className='button'>
                                Chekcout
                            </Link>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
      </section>
   </>
  )
}   

export default Cart
