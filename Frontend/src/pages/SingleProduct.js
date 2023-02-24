import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link ,useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BsHeart } from "react-icons/bs";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import prodcompare from "../images/prodcompare.svg";

import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { config } from "../utils/axiosconfig";
import axios from 'axios'




const SingleProduct = () => {
  const location=useLocation();
  const{ brand,category,color,description,images,price,quantity,ratings,slug,sold,tags,title,totalrating,}=location.state;
  
  const props = {
   width: 200,
   height: 400,
    zoomWidth: 1000, 
    img: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013257278_437Wx649H_202205261842581.jpeg"};

    const copyToClipboard = (text) => {
      console.log("text", text);
      var textField = document.createElement("textarea");
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
    };
  const  [orderProduct, setOrderProduct] = useState(true)
  return (
    <>
      <Meta title="Product Name"></Meta>
      <BreadCrumb title="Product Name" />
      <div className="compare-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div class="row d-flex align-items-center justify-content-center">

          <div className="col-12 card bg-white mb-5 p-3">
         
			
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
             <div class="tab-pane active" id="pic-1"><img src={images[0].url}/></div>
						  {/* <div class="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div> */}
						</div>
						{/* <ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						</ul> */}
						
					</div>




					<div class="details col-md-6 gap-10">
						<h3 class="product-title">{title}</h3>
						<div class="rating">
							<div class="stars">
              <ReactStars
                    count={5}
                    size={30}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
							</div>

							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">{description}</p>
						<h5 class="price">current price: <span>₹{price}</span></h5>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h6 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h6>
						<h6 class="colors d-flex;
    align-items-center">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h6>
						<div class="action row d-flex  gap-30 justify-content-between mb-2">
             <div className="col-sm-4 d-flex gap-10 align-items-center justify-content-md-center">
             <h5 className="mb-0">Quantity : </h5>
              <input type="number"  max={quantity} min={1} style={{
                width: "50px",
                height: "30px",
              }}/>
             </div>

             <div className="col-sm-7 d-flex gap-30">
             <button  className="button " onClick={()=>{
              const cart=[];
              cart.push(location.state)
              console.log(cart)
              axios.post(`http://localhost:5000/api/user/cart`,cart,config).then(result=>{
                console.log(result)
              })
             }}>
           Add to Cart
            </button>
            <Link to="/app/cart"  state={location.state} className="button ">
           Buy Now
            </Link>
             </div>
             
						</div>
            <div className="row d-flex mt-2 compare-wishlist">
            <div className="col-md-4 mb-2 mb-sm-0">

                <a href="" className="text-dark"><TbGitCompare className="fs-2 gap-15"/> Add to Compare</a>
            </div>
            <div className="col-md-4 mb-2 mb-sm-0">

               <a href="" className="text-dark"><AiOutlineHeart className="fs-2 gap-15"/>Add to wishlist</a>
            </div>
            </div>

            <div className="d-flex gap-10 flex-column  mt-3">
                  <h5 className="product-heading">Shipping & Returns :</h5>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>



                <div className="d-flex gap-10 align-items-center my-2">
                  <h6 className="product-heading mb-0">Product Link:</h6>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>

					</div>
				</div>
			
	
          
          {/* <div className="row">
          <div className="col-6" style={{objectFit: "cover", }}>
            <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: watchImg300,
      
    },
    largeImage: {
        src: watchImg1200,
        width: 1200,
        height: 1800
    }
}} />
          
       
            </div>
            <div className="col-6">
              
            </div>
          </div>
             */}
       


          </div>



            <div className="col-12 card mx-auto p-4 mb-4">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur nisi similique illum aut perferendis voluptas, quisquam
                obcaecati qui nobis officia. Voluptatibus in harum deleniti
                labore maxime officia esse eos? Repellat?
              </p>
            </div>

            <h4>Customer Reviews</h4>
            <div className="col-12 card mx-auto p-4 mb-4">
              <div className="row mx-2 border-bottom border-primary mb-3 pb-3">
                <div className="col-4 col-sm-1 ">
                  <div className="review-logo text-white mb-5">
                    <p>R</p>
                  </div>
              
                </div>
                <div className="col-8 d-flex justify-content-between">
                <div className="row">
                   <div className="">
                <ReactStars
                    count={5}
                    size={30}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <h6>Good Product</h6>
                  <p>by Ravi on Nov. 09.2022</p>
                </div>

                  {
                  orderProduct && (
                    <div className="">
                      <a href="">Write a Review</a>
                    </div>
                  )
                  }
                </div>
               

             
                </div>

                
               
              </div>
                  <div className="review-font mb-0">

              <h5 >Write a Review</h5>      
              <ReactStars
                    
                    count={5}
                    size={30}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  /> 
                  </div>

              <div className="row mb-2" >
                <form action="">
              
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows={5}></textarea>

                </form>
               <div className="col-md-2 mt-2 ">
               <Link to="" className="button">
              Submit Review
            </Link>
               </div>
              </div>

              <div className="row mt-2 border border-secondary shadow-none">
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 mx-2">Umakant</h5>
                  <ReactStars
                    
                    count={5}
                    size={30}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  /> 
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat accusamus, magni illo impedit nostrum unde cumque, optio nulla voluptates eum molestias culpa nesciunt architecto alias aliquam tenetur minus! Illum.</p>
              </div>
           
       
              {/* <div className="row mx-2">
                <div className="col-4 col-sm-1 ">
                  <div className="review-logo text-white mb-5">
                    <p>R</p>
                  </div>
                
                </div>
                <div className="col-8 d-flex justify-content-between">
                <div>
                <ReactStars
                    count={5}
                    size={30}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <h6>Good Product</h6>
                  <p>by Ravi on Nov. 09.2022</p>
                </div>

                  {
                  orderProduct && (
                    <div>
                      <a href="">Write a Review</a>
                    </div>
                  )
                  }

             
                </div>

                
               
               </div> */}
            </div>
           

            <div className="col-12">
              <h3>Our Popular Products</h3>
                <div className="row d-sm-flex">
                <div
        className=
          "col-md-3 col-sm-6 product-card "
      >
              <Link to=":id" className="card  position-relative card-style" style={{ width: "100%" }}>
        <div className="row d-flex">

        <div className="col-4 col-sm-12 ">
        <Link>
            <BsHeart className="heart-icon position-absolute" />
          </Link>
          <img
            src={watch}
            className="card-img-top img-fluid product-image"
            alt="product image"
          />
        </div>
        
        <div className="col-8 col-sm-12 ">
        <div className="card-body px-4 ">
            <h6>Havels</h6>
            <h5 className="card-title">
              Kids Headphone Bulks Pack MultiColored Fore{" "}
            </h5>

            <ReactStars
              count={5}
              size={30}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">₹150.00</p>
          </div>
        </div>
           
        </div>
          
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
            <Link>
                <img src={prodcompare} alt="addcart" />
              </Link>
              <Link>
                <img src={view} alt="addcart" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
        </div>
        <div
        className=
          "col-md-3 col-sm-6 product-card "
      >
              <Link to=":id" className="card  position-relative card-style" style={{ width: "100%" }}>
        <div className="row d-flex">

        <div className="col-4 col-sm-12 ">
        <Link>
            <BsHeart className="heart-icon position-absolute" />
          </Link>
          <img
             src={watch}
            className="card-img-top img-fluid product-image"
            alt="product image"
          />
        </div>
        
        <div className="col-8 col-sm-12 ">
        <div className="card-body px-4 ">
            <h6>Havels</h6>
            <h5 className="card-title">
              Kids Headphone Bulks Pack MultiColored Fore{" "}
            </h5>

            <ReactStars
              count={5}
              size={30}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">₹150.00</p>
          </div>
        </div>
           
        </div>
          
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
            <Link>
                <img src={prodcompare} alt="addcart" />
              </Link>
              <Link>
                <img src={view} alt="addcart" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
        </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
